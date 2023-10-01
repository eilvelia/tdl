#define NAPI_VERSION 5
#define NODE_API_NO_EXTERNAL_BUFFERS_ALLOWED 1

#include <napi.h>
#include <thread>

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

#define FAIL(MSG) NAPI_THROW(Napi::Error::New(env, MSG));
#define TYPEFAIL(MSG) NAPI_THROW(Napi::TypeError::New(env, MSG));
#define FAIL_VALUE(MSG) NAPI_THROW(Napi::Error::New(env, MSG), Napi::Value());
#define TYPEFAIL_VALUE(MSG) NAPI_THROW(Napi::TypeError::New(env, MSG), Napi::Value());

Napi::External<void> TdClientCreate(const Napi::CallbackInfo& info) {
  Napi::Env env = info.Env();
  void *client = td_json_client_create();
  return Napi::External<void>::New(env, client);
}

void TdClientSend(const Napi::CallbackInfo& info) {
  Napi::Env env = info.Env();
  void *client = info[0].As<Napi::External<void>>().Data();
  auto request_obj = info[1].As<Napi::Object>();
  auto json = env.Global().Get("JSON").As<Napi::Object>();
  auto stringify = json.Get("stringify").As<Napi::Function>();
  std::string request =
    stringify.Call(json, { request_obj }).As<Napi::String>().Utf8Value();
  td_json_client_send(client, request.c_str());
}

// TODO: Use a dedicated thread per client instead of libuv's threadpool

class ReceiverAsyncWorker : public Napi::AsyncWorker
{
public:
  ReceiverAsyncWorker(
    const Napi::Env& env,
    void *client,
    double timeout
  ) : Napi::AsyncWorker(env), deferred(env), client(client), timeout(timeout) {}

  Napi::Promise GetPromise() { return deferred.Promise(); }

protected:
  void Execute() override {
    const char *tdres = td_json_client_receive(client, timeout);
    // It's also important to copy the string
    response = tdres == nullptr ? std::string() : std::string(tdres);
  }

  void OnOK() override {
    Napi::Env env = Env();
    if (response.empty()) {
      deferred.Resolve(env.Null());
    } else {
      auto json = env.Global().Get("JSON").As<Napi::Object>();
      auto parse = json.Get("parse").As<Napi::Function>();
      Napi::Value obj = parse.Call(json, { Napi::String::New(env, response) });
      deferred.Resolve(obj);
    }
  }

  void OnError(const Napi::Error& err) override {
    deferred.Reject(err.Value());
  }

private:
  Napi::Promise::Deferred deferred;
  void *client;
  double timeout;
  std::string response;
};

Napi::Value TdClientReceive(const Napi::CallbackInfo& info) {
  Napi::Env env = info.Env();
  void *client = info[0].As<Napi::External<void>>().Data();
  double timeout = info[1].As<Napi::Number>().DoubleValue();
  auto *worker = new ReceiverAsyncWorker(env, client, timeout);
  worker->Queue();
  return worker->GetPromise();
}

Napi::Value TdClientExecute(const Napi::CallbackInfo& info) {
  Napi::Env env = info.Env();
  void *client = info[0].IsNull() || info[0].IsUndefined()
    ? nullptr
    : info[0].As<Napi::External<void>>().Data();
  auto json = env.Global().Get("JSON").As<Napi::Object>();
  auto stringify = json.Get("stringify").As<Napi::Function>();
  if (!info[1].IsObject())
    TYPEFAIL_VALUE("Expected second argument to be an object");
  Napi::Object request_obj = info[1].As<Napi::Object>();
  std::string request =
    stringify.Call(json, { request_obj }).As<Napi::String>().Utf8Value();
  const char *response = td_json_client_execute(client, request.c_str());
  if (response == nullptr) return env.Null();
  auto parse = json.Get("parse").As<Napi::Function>();
  return parse.Call(json, { Napi::String::New(env, response) });
}

void TdClientDestroy(const Napi::CallbackInfo& info) {
  void *client = info[0].As<Napi::External<void>>().Data();
  td_json_client_destroy(client);
}

namespace MessageCallback {
  using Context = std::nullptr_t;
  struct DataType {
    int verbosity_level;
    std::string message;
  };

  void CallJs(Napi::Env env, Napi::Function callback, Context *context, DataType *data) {
    if (data == nullptr) return;
    if (env != nullptr && callback != nullptr) {
      // NOTE: Without --force-node-api-uncaught-exceptions-policy=true, this will
      // print a warning and won't rethrow an exception from inside the callback
      // https://github.com/nodejs/node-addon-api/pull/1345
      callback.Call({
        Napi::Number::New(env, data->verbosity_level),
        Napi::String::New(env, data->message)
      });
    }
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
    if (verbosity_level == 0) {
      // See below.
      std::this_thread::sleep_for(std::chrono::seconds(5));
    }
  }
}

void TdSetLogMessageCallback(const Napi::CallbackInfo& info) {
  using namespace MessageCallback;
  Napi::Env env = info.Env();
  if (td_set_log_message_callback == nullptr)
    FAIL("td_set_log_message_callback is not available")
  if (info.Length() < 2)
    TYPEFAIL("Expected two arguments")
  if (!info[0].IsNumber())
    TYPEFAIL("Expected first argument to be a number")
  int max_verbosity_level = info[0].As<Napi::Number>().Int32Value();
  if (info[1].IsNull() || info[1].IsUndefined()) {
    td_set_log_message_callback(max_verbosity_level, nullptr);
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
  fatal_callback_tsfn.NonBlockingCall(callback);
  // Hack for the aforementioned issue. Note that there is still no guarantee
  // that the callback will be executed. For example, td_execute(addLogMessage)
  // with verbosity_level=0 runs this function on the main thread.
  std::this_thread::sleep_for(std::chrono::seconds(5));
}

void TdSetLogFatalErrorCallback(const Napi::CallbackInfo& info) {
  Napi::Env env = info.Env();
  if (info[0].IsNull() || info[0].IsUndefined()) {
    td_set_log_fatal_error_callback(nullptr);
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
  if ((dlsym_err_cstr = dlerror()) != nullptr) { \
    std::string dlsym_err(dlsym_err_cstr); \
    FAIL("Failed to get " #F ": " + dlsym_err); \
  } \
  if (F == nullptr) { \
    FAIL("Failed to get " #F " (null)"); \
  }

#define FINDFUNC_OPT(F) \
  F = (F##_t) dlsym(handle, #F); \
  dlerror();

void LoadTdjson(const Napi::CallbackInfo& info) {
  Napi::Env env = info.Env();
  std::string library_file = info[0].As<Napi::String>().Utf8Value();
  dlerror(); // Clear errors
  void *handle = DLOPEN(library_file.c_str())
  char *dlopen_err_cstr = dlerror();
  if (handle == nullptr) {
    std::string dlopen_err(dlopen_err_cstr == nullptr ? "NULL" : dlopen_err_cstr);
    FAIL("Dynamic Loading Error: " + dlopen_err);
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
  exports["create"] = Napi::Function::New(env, TdClientCreate, "create");
  exports["send"] = Napi::Function::New(env, TdClientSend, "send");
  exports["receive"] = Napi::Function::New(env, TdClientReceive, "receive");
  exports["execute"] = Napi::Function::New(env, TdClientExecute, "execute");
  exports["destroy"] = Napi::Function::New(env, TdClientDestroy, "destroy");
  exports["setLogFatalErrorCallback"] =
    Napi::Function::New(env, TdSetLogFatalErrorCallback, "setLogFatalErrorCallback");
  exports["setLogMessageCallback"] =
    Napi::Function::New(env, TdSetLogMessageCallback, "setLogMessageCallback");
  exports["loadTdjson"] = Napi::Function::New(env, LoadTdjson, "loadTdjson");
  return exports;
}

NODE_API_MODULE(addon, Init)
