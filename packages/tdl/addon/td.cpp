#define NAPI_VERSION 5
#define NODE_API_NO_EXTERNAL_BUFFERS_ALLOWED 1
#include <napi.h>

#if defined(WIN32) || defined(_WIN32) || defined(__WIN32__)
#  include "win32-dlfcn.h"
#else
#  include <dlfcn.h>
#endif

#ifdef RTLD_DEEPBIND
#  pragma message("Using RTLD_DEEPBIND")
#  define DLOPEN(FILE) dlopen(FILE, RTLD_LAZY | RTLD_LOCAL | RTLD_DEEPBIND);
#else
#  pragma message("Using standard dlopen")
#  define DLOPEN(FILE) dlopen(FILE, RTLD_LAZY | RTLD_LOCAL);
#endif

typedef void * (*td_json_client_create_t)();
typedef void (*td_json_client_send_t)(void *client, const char *request);
typedef const char * (*td_json_client_receive_t)(void *client, double timeout);
typedef const char * (*td_json_client_execute_t)(void *client, const char *request);
typedef void (*td_json_client_destroy_t)(void *client);

typedef void (*td_log_fatal_error_callback_ptr)(const char *error_message);
typedef void (*td_set_log_fatal_error_callback_t)(td_log_fatal_error_callback_ptr callback);

typedef void (*td_log_message_callback_ptr)(int verbosity_level, const char *message);
typedef void (*td_set_log_message_callback_t)(int max_verbosity_level, td_log_message_callback_ptr callback);

td_json_client_create_t td_json_client_create;
td_json_client_send_t td_json_client_send;
td_json_client_receive_t td_json_client_receive;
td_json_client_execute_t td_json_client_execute;
td_json_client_destroy_t td_json_client_destroy;
td_set_log_fatal_error_callback_t td_set_log_fatal_error_callback;
td_set_log_message_callback_t td_set_log_message_callback;

Napi::External<void> td_client_create(const Napi::CallbackInfo& info) {
  Napi::Env env = info.Env();
  void *client = td_json_client_create();
  return Napi::External<void>::New(env, client);
}

void td_client_send(const Napi::CallbackInfo& info) {
  void *client = info[0].As<Napi::External<void>>().Data();
  std::string request = info[1].As<Napi::String>().Utf8Value();
  td_json_client_send(client, request.c_str());
}

// TODO: Use a dedicated thread per client instead of libuv's threadpool

class ReceiverAsyncWorker : public Napi::AsyncWorker
{
public:
  ReceiverAsyncWorker(
    const Napi::Function& callback,
    void *client,
    double timeout
  ) : Napi::AsyncWorker(callback), client(client), timeout(timeout)
  {}

protected:
  void Execute() override {
    const char *tdres = td_json_client_receive(client, timeout);
    // It's also important to copy the string
    res = tdres == NULL ? std::string() : std::string(tdres);
  }

  void OnOK() override {
    Napi::Env env = Env();
    auto val = res.empty() ? env.Null() : Napi::String::New(env, res);
    Callback().MakeCallback(Receiver().Value(), { env.Null(), val });
  }

  void OnError(const Napi::Error& e) override {
    Napi::Env env = Env();
    Callback().MakeCallback(Receiver().Value(), { e.Value(), env.Undefined() });
  }

private:
  void *client;
  double timeout;
  std::string res;
};

void td_client_receive(const Napi::CallbackInfo& info) {
  void *client = info[0].As<Napi::External<void>>().Data();
  double timeout = info[1].As<Napi::Number>().DoubleValue();
  Napi::Function cb = info[2].As<Napi::Function>();
  (new ReceiverAsyncWorker(cb, client, timeout))->Queue();
}

Napi::Value td_client_execute(const Napi::CallbackInfo& info) {
  Napi::Env env = info.Env();
  void *client = info[0].IsNull() ? NULL : info[0].As<Napi::External<void>>().Data();
  std::string request = info[1].As<Napi::String>().Utf8Value();
  const char *response = td_json_client_execute(client, request.c_str());
  if (response == NULL) return env.Null();
  return Napi::String::New(env, response);
}

void td_client_destroy(const Napi::CallbackInfo& info) {
  void *client = info[0].As<Napi::External<void>>().Data();
  td_json_client_destroy(client);
}

#define FAIL(MSG) NAPI_THROW(Napi::Error::New(env, MSG));
#define TYPEFAIL(MSG) NAPI_THROW(Napi::TypeError::New(env, MSG));

namespace MessageCallback {
  using Context = std::nullptr_t;
  struct DataType {
    int verbosity_level;
    std::string message;
  };

  void CallJs(Napi::Env env, Napi::Function callback, Context *context, DataType *data) {
    if (env == nullptr || callback == nullptr || data == nullptr) return;
    // NOTE: Without --force-node-api-uncaught-exceptions-policy=true, this will
    // print a warning and won't rethrow an exception from inside the callback
    // https://github.com/nodejs/node-addon-api/pull/1345
    callback.Call({
      Napi::Number::New(env, data->verbosity_level),
      Napi::String::New(env, data->message)
    });
    delete data;
  }

  using Tsfn = Napi::TypedThreadSafeFunction<Context, DataType, CallJs>;

  Tsfn tsfn = nullptr;
  std::mutex tsfn_mutex;

  extern "C" void c_message_callback (int verbosity_level, const char *message) {
    std::lock_guard<std::mutex> lock(tsfn_mutex);
    if (tsfn == nullptr) return;
    auto *data = new DataType { verbosity_level, std::string(message) };
    tsfn.NonBlockingCall(data);
  }
}

void td_set_message_callback(const Napi::CallbackInfo& info) {
  using namespace MessageCallback;
  Napi::Env env = info.Env();
  if (td_set_log_message_callback == NULL)
    FAIL("td_set_log_message_callback is not available")
  if (info.Length() < 2)
    TYPEFAIL("Expected two arguments")
  if (!info[0].IsNumber())
    TYPEFAIL("Expected first argument to be a number")
  int max_verbosity_level = info[0].As<Napi::Number>().Int32Value();
  if (info[1].IsNull() || info[1].IsUndefined()) {
    td_set_log_message_callback(max_verbosity_level, NULL);
    std::lock_guard<std::mutex> lock(tsfn_mutex);
    if (tsfn != nullptr) {
      tsfn.Release();
      tsfn = nullptr;
    }
    return;
  }
  if (!info[1].IsFunction())
    TYPEFAIL("Expected second argument to be one of: a function, null, undefined")
  std::lock_guard<std::mutex> lock(tsfn_mutex);
  if (tsfn != nullptr)
    tsfn.Release();
  tsfn = Tsfn::New(env, info[1].As<Napi::Function>(), "Callback", 0, 1);
  tsfn.Unref(env);
  td_set_log_message_callback(max_verbosity_level, &c_message_callback);
}

Napi::ThreadSafeFunction fatal_callback_tsfn = nullptr;

// NOTE: If TDLib exits with SIGABRT right after the verbosity_level=0 message,
// we won't actually have a chance to pass the message to the main thread and
// this function is not quite useful.
extern "C" void c_fatal_callback (const char *error_message) {
  if (fatal_callback_tsfn == nullptr) return;
  std::string message_str(error_message);
  auto callback = [=](Napi::Env env, Napi::Function js_callback) {
    js_callback.Call({ Napi::String::New(env, message_str) });
  };
  fatal_callback_tsfn.BlockingCall(callback);
}

void td_set_fatal_error_callback(const Napi::CallbackInfo& info) {
  Napi::Env env = info.Env();
  if (info[0].IsNull() || info[0].IsUndefined()) {
    td_set_log_fatal_error_callback(NULL);
    if (fatal_callback_tsfn != nullptr) {
      fatal_callback_tsfn.Release();
      fatal_callback_tsfn = nullptr;
    }
    return;
  }
  if (!info[0].IsFunction())
    TYPEFAIL("Expected first argument to be one of: a function, null, undefined")
  if (fatal_callback_tsfn != nullptr)
    fatal_callback_tsfn.Release();
  fatal_callback_tsfn = Napi::ThreadSafeFunction::New(
    env, info[0].As<Napi::Function>(), "Callback", 0, 1);
  fatal_callback_tsfn.Unref(env);
  td_set_log_fatal_error_callback(&c_fatal_callback);
}

#define FINDFUNC(F) \
  F = (F##_t) dlsym(handle, #F); \
  if ((dlsym_err_cstr = dlerror()) != NULL) { \
    std::string dlsym_err(dlsym_err_cstr); \
    NAPI_THROW(Napi::Error::New(env, "Failed to get " #F ": " + dlsym_err)); \
  } \
  if (F == NULL) { \
    NAPI_THROW(Napi::Error::New(env, "Failed to get " #F " (null)")); \
  }

#define FINDFUNC_OPT(F) \
  F = (F##_t) dlsym(handle, #F); \
  dlerror();

void load_tdjson(const Napi::CallbackInfo& info) {
  Napi::Env env = info.Env();
  std::string library_file = info[0].As<Napi::String>().Utf8Value();
  dlerror(); // Clear errors
  void *handle = DLOPEN(library_file.c_str())
  char *dlopen_err_cstr = dlerror();
  if (handle == NULL) {
    std::string dlopen_err(dlopen_err_cstr == NULL ? "NULL" : dlopen_err_cstr);
    NAPI_THROW(Napi::Error::New(env, "Dynamic Loading Error: " + dlopen_err));
  }
  char *dlsym_err_cstr;
  FINDFUNC(td_json_client_create);
  FINDFUNC(td_json_client_send);
  FINDFUNC(td_json_client_receive);
  FINDFUNC(td_json_client_execute);
  FINDFUNC(td_json_client_destroy);
  FINDFUNC(td_set_log_fatal_error_callback);
  FINDFUNC_OPT(td_set_log_message_callback);
}

Napi::Object Init(Napi::Env env, Napi::Object exports) {
  exports.Set(
    "td_client_create", Napi::Function::New(env, td_client_create));
  exports.Set(
    "td_client_send", Napi::Function::New(env, td_client_send));
  exports.Set(
    "td_client_receive", Napi::Function::New(env, td_client_receive));
  exports.Set(
    "td_client_execute", Napi::Function::New(env, td_client_execute));
  exports.Set(
    "td_client_destroy", Napi::Function::New(env, td_client_destroy));
  exports.Set(
    "td_set_fatal_error_callback", Napi::Function::New(env, td_set_fatal_error_callback));
  exports.Set(
    "td_set_message_callback", Napi::Function::New(env, td_set_message_callback));
  exports.Set(
    "load_tdjson", Napi::Function::New(env, load_tdjson));
  return exports;
}

NODE_API_MODULE(addon, Init)
