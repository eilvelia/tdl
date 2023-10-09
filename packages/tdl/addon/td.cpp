#define NAPI_VERSION 5
#define NODE_API_NO_EXTERNAL_BUFFERS_ALLOWED 1

#include <napi.h>
#include <thread>
#include <chrono>
#include <atomic>
#include <mutex>
#include <condition_variable>
#include <unordered_map>
#include <memory>

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

// New tdjson interface
typedef int (*td_create_client_id_t)();
typedef void (*td_send_t)(int client_id, const char *request);
typedef const char * (*td_receive_t)(double timeout);
typedef const char * (*td_execute_t)(const char *request);

td_json_client_create_t td_json_client_create;
td_json_client_send_t td_json_client_send;
td_json_client_receive_t td_json_client_receive;
td_json_client_execute_t td_json_client_execute;
td_json_client_destroy_t td_json_client_destroy;
td_set_log_fatal_error_callback_t td_set_log_fatal_error_callback;
td_set_log_message_callback_t td_set_log_message_callback;
td_create_client_id_t td_create_client_id;
td_send_t td_send;
td_receive_t td_receive;
td_execute_t td_execute;

#define FAIL(MSG, ...) \
  NAPI_THROW(Napi::Error::New(env, MSG), __VA_ARGS__);
#define TYPEFAIL(MSG, ...) \
  NAPI_THROW(Napi::TypeError::New(env, MSG), __VA_ARGS__);

class ReceiveWorker {
public:
  ReceiveWorker(const Napi::Env& env, void *client, double timeout)
    : client(client), timeout(timeout), cycle_ref(client == nullptr),
      tsfn(Tsfn::New(env, "ReceiveTSFN", 0, 1, this)),
      thread(&ReceiveWorker::loop, this)
    {
      if (client != nullptr) return;
      thread.detach();
      tsfn.Unref(env);
    }
  ~ReceiveWorker() {
    working = false;
    {
      std::lock_guard<std::mutex> lock(mutex);
      stop = true;
    }
    cv.notify_all();
    if (thread.joinable())
      thread.join();
  }

  Napi::Promise NewTask(const Napi::Env& env) {
    // A task can be added only after the previous task is finished.
    auto new_deferred = std::make_unique<Napi::Promise::Deferred>(env);
    auto promise = new_deferred->Promise();
    if (working) {
      auto error = Napi::Error::New(env, "receive is not finished yet");
      new_deferred->Reject(error.Value());
      return promise;
    }
    {
      std::lock_guard<std::mutex> lock(mutex);
      if (cycle_ref) tsfn.Ref(env);
      deferred = std::move(new_deferred);
    }
    cv.notify_all();
    return promise;
  }
private:
  using TsfnCtx = ReceiveWorker;
  struct TsfnData {
    std::unique_ptr<Napi::Promise::Deferred> deferred;
    const char *response; // can be nullptr
  };
  static void CallJs(Napi::Env env, Napi::Function, TsfnCtx *ctx, TsfnData *data) {
    if (data == nullptr) return;
    if (env != nullptr) {
      auto val = data->response == nullptr
        ? env.Null()
        : Napi::String::New(env, data->response);
      if (ctx != nullptr && ctx->cycle_ref) ctx->tsfn.Unref(env);
      // Note that this can potentially execute the JS code
      data->deferred->Resolve(val);
      // ctx may not exist anymore
    }
    delete data;
  }
  using Tsfn = Napi::TypedThreadSafeFunction<TsfnCtx, TsfnData, CallJs>;

  void loop() {
    while (true) {
      std::unique_lock<std::mutex> lock(mutex);
      cv.wait(lock, [this] { return deferred != nullptr || stop; });
      if (stop) break;
      working = true;
      const char *response = client == nullptr
        ? td_receive(timeout)
        : td_json_client_receive(client, timeout);
      if (working == false) break;
      // TDLib stores the response in thread-local storage that is deallocated
      // on execute() and receive(). Since we never call execute() in this
      // thread, it should be safe not to copy the response here.
      auto data = new TsfnData { std::move(deferred), response };
      auto status = tsfn.NonBlockingCall(data);
      if (status != napi_ok) delete data;
      deferred = nullptr;
      working = false;
    }
    tsfn.Release();
    // TODO: Perhaps we should deallocate the response if this thread will not
    // call receive anymore?
  }

  void *client;
  double timeout;
  bool cycle_ref;
  Tsfn tsfn;
  std::atomic_bool working {false};
  std::unique_ptr<Napi::Promise::Deferred> deferred;
  bool stop {false};
  std::mutex mutex;
  std::condition_variable cv;
  std::thread thread;
};

// Old tdjson interface
namespace Tdo {
  std::unordered_map<void *, ReceiveWorker *> client_workers;

  Napi::Value ClientCreate(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();
    if (!info[0].IsNumber())
      TYPEFAIL("Expected first argument to be a number", Napi::Value());
    double timeout = info[0].As<Napi::Number>().DoubleValue();
    void *client = td_json_client_create();
    if (client == nullptr)
      FAIL("td_json_client_create returned NULL", Napi::Value());
    client_workers.insert({ client, new ReceiveWorker(env, client, timeout) });
    return Napi::External<void>::New(env, client);
  }

  void ClientSend(const Napi::CallbackInfo& info) {
    void *client = info[0].As<Napi::External<void>>().Data();
    std::string request = info[1].As<Napi::String>().Utf8Value();
    td_json_client_send(client, request.c_str());
  }

  // Do not call again until the promise is resolved/rejected.
  Napi::Value ClientReceive(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();
    void *client = info[0].As<Napi::External<void>>().Data();
    auto& worker = client_workers[client];
    return worker->NewTask(env);
  }

  Napi::Value ClientExecute(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();
    void *client = info[0].IsNull() || info[0].IsUndefined()
      ? nullptr
      : info[0].As<Napi::External<void>>().Data();
    if (!info[1].IsString())
      TYPEFAIL("Expected second argument to be a string", Napi::Value());
    std::string request = info[1].As<Napi::String>().Utf8Value();
    const char *response = td_json_client_execute(client, request.c_str());
    if (response == nullptr) return env.Null();
    return Napi::String::New(env, response);
  }

  // Do not call if the receive promise is pending.
  void ClientDestroy(const Napi::CallbackInfo& info) {
    void *client = info[0].As<Napi::External<void>>().Data();
    if (client_workers.count(client) < 1) {
      Napi::Env env = info.Env();
      FAIL("Could not find the client");
    }
    td_json_client_destroy(client);
    delete client_workers[client];
    client_workers.erase(client);
  }
}

// New tdjson interface
namespace Tdn {
  ReceiveWorker *worker = nullptr;

  // Set the receive timeout explicitly.
  void Init(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();
    if (worker != nullptr)
      FAIL("The worker is already initialized");
    if (!info[0].IsNumber())
      TYPEFAIL("Expected first argument to be a number");
    double timeout = info[0].As<Napi::Number>().DoubleValue();
    worker = new ReceiveWorker(env, nullptr, timeout);
  }

  Napi::Value CreateClientId(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();
    if (td_create_client_id == nullptr)
      FAIL("td_create_client_id is not available", Napi::Value());
    if (td_send == nullptr)
      FAIL("td_send is not available", Napi::Value());
    if (td_receive == nullptr)
      FAIL("td_receive is not available", Napi::Value());
    int client_id = td_create_client_id();
    if (worker == nullptr)
      worker = new ReceiveWorker(env, nullptr, 10.0);
    return Napi::Number::New(env, client_id);
  }

  void Send(const Napi::CallbackInfo& info) {
    int client_id = info[0].As<Napi::Number>().Int32Value();
    std::string request = info[1].As<Napi::String>().Utf8Value();
    td_send(client_id, request.c_str());
  }

  // Should not be called again until promise is resolved/rejected.
  Napi::Value Receive(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();
    return worker->NewTask(env);
  }

  Napi::Value Execute(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();
    if (td_execute == nullptr)
      FAIL("td_execute is not available", Napi::Value());
    if (!info[0].IsString())
      TYPEFAIL("Expected first argument to be a string", Napi::Value());
    std::string request = info[0].As<Napi::String>().Utf8Value();
    const char *response = td_execute(request.c_str());
    if (response == nullptr) return env.Null();
    return Napi::String::New(env, response);
  }

  // void Stop(const Napi::CallbackInfo& info) { delete worker; }
}

namespace TdCallbacks {
  using TsfnCtx = std::nullptr_t;
  struct TsfnData {
    int verbosity_level;
    std::string message;
  };
  void CallJs(Napi::Env env, Napi::Function callback, TsfnCtx *, TsfnData *data) {
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
  using Tsfn = Napi::TypedThreadSafeFunction<TsfnCtx, TsfnData, CallJs>;

  Tsfn tsfn = nullptr;
  std::mutex tsfn_mutex;

  extern "C" void c_message_callback (int verbosity_level, const char *message) {
    std::lock_guard<std::mutex> lock(tsfn_mutex);
    if (tsfn == nullptr) return;
    auto *data = new TsfnData { verbosity_level, std::string(message) };
    tsfn.NonBlockingCall(data);
    if (verbosity_level == 0) {
      // See below.
      std::this_thread::sleep_for(std::chrono::seconds(5));
    }
  }

  void SetLogMessageCallback(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();
    if (td_set_log_message_callback == nullptr)
      FAIL("td_set_log_message_callback is not available");
    if (info.Length() < 2)
      TYPEFAIL("Expected two arguments");
    if (!info[0].IsNumber())
      TYPEFAIL("Expected first argument to be a number");
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
      TYPEFAIL("Expected second argument to be one of: a function, null, undefined");
    std::lock_guard<std::mutex> lock(tsfn_mutex);
    if (tsfn != nullptr)
      tsfn.Release();
    tsfn = Tsfn::New(env, info[1].As<Napi::Function>(), "CallbackTSFN", 0, 1);
    tsfn.Unref(env);
    td_set_log_message_callback(max_verbosity_level, &c_message_callback);
  }

  Napi::ThreadSafeFunction fatal_callback_tsfn = nullptr;

  // NOTE: If TDLib exits with SIGABRT right after the verbosity_level=0 message,
  // we won't actually have a chance to pass the message to the main thread.
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

  void SetLogFatalErrorCallback(const Napi::CallbackInfo& info) {
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
      TYPEFAIL("Expected first argument to be one of: a function, null, undefined");
    if (fatal_callback_tsfn != nullptr)
      fatal_callback_tsfn.Release();
    fatal_callback_tsfn = Napi::ThreadSafeFunction::New(
      env, info[0].As<Napi::Function>(), "FatalCallbackTSFN", 0, 1);
    fatal_callback_tsfn.Unref(env);
    td_set_log_fatal_error_callback(&c_fatal_callback);
  }
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
  void *handle = DLOPEN(library_file.c_str());
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
  FINDFUNC_OPT(td_create_client_id);
  FINDFUNC_OPT(td_send);
  FINDFUNC_OPT(td_receive);
  FINDFUNC_OPT(td_execute);
}

Napi::Object Init(Napi::Env env, Napi::Object exports) {
  exports["create"] = Napi::Function::New(env, Tdo::ClientCreate, "create");
  exports["send"] = Napi::Function::New(env, Tdo::ClientSend, "send");
  exports["receive"] = Napi::Function::New(env, Tdo::ClientReceive, "receive");
  exports["execute"] = Napi::Function::New(env, Tdo::ClientExecute, "execute");
  exports["destroy"] = Napi::Function::New(env, Tdo::ClientDestroy, "destroy");
  exports["setLogFatalErrorCallback"] =
    Napi::Function::New(env, TdCallbacks::SetLogFatalErrorCallback, "setLogFatalErrorCallback");
  exports["setLogMessageCallback"] =
    Napi::Function::New(env, TdCallbacks::SetLogMessageCallback, "setLogMessageCallback");
  exports["tdnInit"] = Napi::Function::New(env, Tdn::Init, "init");
  exports["tdnCreateClientId"] =
    Napi::Function::New(env, Tdn::CreateClientId, "createClientId");
  exports["tdnSend"] = Napi::Function::New(env, Tdn::Send, "send");
  exports["tdnReceive"] = Napi::Function::New(env, Tdn::Receive, "receive");
  exports["tdnExecute"] = Napi::Function::New(env, Tdn::Execute, "execute");
  exports["loadTdjson"] = Napi::Function::New(env, LoadTdjson, "loadTdjson");
  return exports;
}

NODE_API_MODULE(addon, Init)
