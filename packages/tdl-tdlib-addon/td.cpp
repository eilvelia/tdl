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

td_json_client_create_t td_json_client_create;
td_json_client_send_t td_json_client_send;
td_json_client_receive_t td_json_client_receive;
td_json_client_execute_t td_json_client_execute;
td_json_client_destroy_t td_json_client_destroy;

td_set_log_fatal_error_callback_t td_set_log_fatal_error_callback;

Napi::External<void> td_client_create(const Napi::CallbackInfo& info) {
  Napi::Env env = info.Env();
  void* client = td_json_client_create();
  return Napi::External<void>::New(env, client);
}

void td_client_send(const Napi::CallbackInfo& info) {
  void* client = info[0].As<Napi::External<void>>().Data();
  std::string request_str = info[1].As<Napi::String>().Utf8Value();
  const char* request = request_str.c_str();
  td_json_client_send(client, request);
}

// TODO: Use a dedicated thread per client instead of libuv's threadpool

class ReceiverAsyncWorker : public Napi::AsyncWorker
{
public:
  ReceiverAsyncWorker(
    const Napi::Function& callback,
    void* client,
    double timeout
  ) : Napi::AsyncWorker(callback), client(client), timeout(timeout)
  {}

protected:
  void Execute() override {
    const char* tdres = td_json_client_receive(client, timeout);
    // It's also important to copy the string
    res = std::string(tdres == NULL ? "" : tdres);
  }

  void OnOK() override {
    Napi::Env env = Env();
    auto val = res == "" ? env.Null() : Napi::String::New(env, res);
    Callback().MakeCallback(Receiver().Value(), { env.Null(), val });
  }

  void OnError(const Napi::Error& e) override {
    Napi::Env env = Env();
    Callback().MakeCallback(Receiver().Value(), { e.Value(), env.Undefined() });
  }

private:
  void* client;
  double timeout;
  std::string res;
};

void td_client_receive(const Napi::CallbackInfo& info) {
  // Napi::Env env = info.Env();
  void* client = info[0].As<Napi::External<void>>().Data();
  double timeout = info[1].As<Napi::Number>().DoubleValue();
  Napi::Function cb = info[2].As<Napi::Function>();
  (new ReceiverAsyncWorker(cb, client, timeout))->Queue();
}

Napi::Value td_client_execute(const Napi::CallbackInfo& info) {
  Napi::Env env = info.Env();
  void* client = info[0].IsNull() ? NULL : info[0].As<Napi::External<void>>().Data();
  std::string request_str = info[1].As<Napi::String>().Utf8Value();
  const char* request = request_str.c_str();
  const char* response = td_json_client_execute(client, request);
  if (response == NULL) return env.Null();
  return Napi::String::New(env, response);
}

// TODO: Call destroy automatically in a JS finalizer instead of passing
//       the function to JS?

void td_client_destroy(const Napi::CallbackInfo& info) {
  void* client = info[0].As<Napi::External<void>>().Data();
  td_json_client_destroy(client);
}

Napi::FunctionReference js_fatal_cb;

// This should work, but I haven't tested it
extern "C" void fatal_cb (const char *error_message) {
  // if (js_fatal_cb == NULL) return;
  js_fatal_cb.Call({ Napi::String::New(js_fatal_cb.Env(), error_message) });
}

void td_set_fatal_error_callback(const Napi::CallbackInfo& info) {
  // Not thread safe
  if (info[0].IsNull() || info[0].IsUndefined()) {
    td_set_log_fatal_error_callback(NULL);
  } else {
    js_fatal_cb = Napi::Persistent(info[0].As<Napi::Function>());
    td_set_log_fatal_error_callback(&fatal_cb);
  }
}

#define FINDFUNC(F) \
  F = (F##_t) dlsym(handle, #F); \
  if ((dlsym_err_cstr = dlerror()) != NULL) { \
    std::string dlsym_err(dlsym_err_cstr == NULL ? "" : dlsym_err_cstr); \
    std::string js_dlsym_err = "Failed to load '" #F "': " + dlsym_err; \
    Napi::Error::New(env, js_dlsym_err).ThrowAsJavaScriptException(); \
    return; \
  }

void load_tdjson(const Napi::CallbackInfo& info) {
  Napi::Env env = info.Env();
  std::string library_file_str = info[0].As<Napi::String>().Utf8Value();
  const char* library_file = library_file_str.c_str();
  void* handle = DLOPEN(library_file)
  if (handle == NULL) {
    char* dlerror_message = dlerror();
    std::string err_message(dlerror_message == NULL ? "NULL" : dlerror_message);
    std::string js_err_message = "Dynamic Loading Error: " + err_message;
    auto err = Napi::Error::New(env, js_err_message);
    err.ThrowAsJavaScriptException();
    return;
  }
  char* dlsym_err_cstr;
  FINDFUNC(td_json_client_create);
  FINDFUNC(td_json_client_send);
  FINDFUNC(td_json_client_receive);
  FINDFUNC(td_json_client_execute);
  FINDFUNC(td_json_client_destroy);
  FINDFUNC(td_set_log_fatal_error_callback);
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
    "load_tdjson", Napi::Function::New(env, load_tdjson));
  return exports;
}

NODE_API_MODULE(addon, Init)
