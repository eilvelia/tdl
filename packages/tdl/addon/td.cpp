#define NAPI_VERSION 5
#define NODE_API_NO_EXTERNAL_BUFFERS_ALLOWED 1

#include <napi.h>
#include <thread>
#include <chrono>
#include <atomic>
#include <mutex>
#include <condition_variable>
#include <memory>

#if defined(WIN32) || defined(_WIN32) || defined(__WIN32__)
#  include "win32-dlfcn.h"
#else
#  include <dlfcn.h>
#endif

#ifdef RTLD_DEEPBIND
#  pragma message("Using RTLD_DEEPBIND")
#  define DLOPEN(FILE) dlopen(FILE, RTLD_LAZY | RTLD_LOCAL | RTLD_DEEPBIND)
#else
#  pragma message("Using standard dlopen")
#  define DLOPEN(FILE) dlopen(FILE, RTLD_LAZY | RTLD_LOCAL)
#endif

typedef void * (*td_json_client_create_t)();
typedef void (*td_json_client_send_t)(void *client, const char *request);
typedef const char * (*td_json_client_receive_t)(void *client, double timeout);
typedef const char * (*td_json_client_execute_t)(void *client, const char *request);
typedef void (*td_json_client_destroy_t)(void *client);

// New tdjson interface
typedef int (*td_create_client_id_t)();
typedef void (*td_send_t)(int client_id, const char *request);
typedef const char * (*td_receive_t)(double timeout);
typedef const char * (*td_execute_t)(const char *request);

typedef void (*td_log_message_callback_ptr)(int verbosity_level, const char *message);
typedef void (*td_set_log_message_callback_t)(int max_verbosity_level, td_log_message_callback_ptr callback);

td_json_client_create_t td_json_client_create;
td_json_client_send_t td_json_client_send;
td_json_client_receive_t td_json_client_receive;
td_json_client_execute_t td_json_client_execute;
td_json_client_destroy_t td_json_client_destroy;
td_create_client_id_t td_create_client_id;
td_send_t td_send;
td_receive_t td_receive;
td_execute_t td_execute;
td_set_log_message_callback_t td_set_log_message_callback;

#define FAIL(MSG, ...) \
  NAPI_THROW(Napi::Error::New(env, MSG), __VA_ARGS__);
#define TYPEFAIL(MSG, ...) \
  NAPI_THROW(Napi::TypeError::New(env, MSG), __VA_ARGS__);

static const char empty_str[] = "";

class ReceiveWorker {
public:
  ReceiveWorker(const Napi::Env& env, void *client, double timeout)
    : client(client), timeout(timeout),
      tsfn(Tsfn::New(env, "ReceiveTSFN", 0, 1, this)),
      thread(&ReceiveWorker::loop, this)
    {
      if (client == nullptr) // New tdjson interface
        thread.detach();
      tsfn.Ref(env); // bun does not ref by default
    }
  ~ReceiveWorker() {
    {
      std::lock_guard<std::mutex> lock(mutex);
      stop = true;
      ready = true;
    }
    cv.notify_all();
    if (client != nullptr)
      td_json_client_destroy(client);
    if (thread.joinable())
      thread.join();
  }

  // A task can be added only after the previous task is finished.
  Napi::Promise NewTask(const Napi::Env& env) {
    if (deferred != nullptr) {
      auto error = Napi::Error::New(env, "receive is not finished yet");
      auto fail_deferred = Napi::Promise::Deferred::New(env);
      fail_deferred.Reject(error.Value());
      return fail_deferred.Promise();
    }
    deferred = std::make_unique<Napi::Promise::Deferred>(env);
    {
      std::lock_guard<std::mutex> lock(mutex);
      ready = true;
    }
    cv.notify_all();
    return deferred->Promise();
  }

  void Ref(const Napi::Env& env) { tsfn.Ref(env); }
  void Unref(const Napi::Env& env) { tsfn.Unref(env); }
  inline void * GetClient() { return client; }
private:
  using TsfnCtx = ReceiveWorker;
  // Called on the main thread
  static void CallJs(Napi::Env env, Napi::Function, TsfnCtx *ctx, char *data) {
    if (env != nullptr && ctx != nullptr) {
      const char *res = data;
      auto val = res == nullptr || *res == '\0' ? env.Null() : Napi::String::New(env, res);
      auto deferred = std::move(ctx->deferred);
      // Note that this can potentially execute the JS code (it does in deno)
      deferred->Resolve(val);
      // ctx may not exist anymore
    }
  }
  using Tsfn = Napi::TypedThreadSafeFunction<TsfnCtx, char, CallJs>;

  void loop() {
    std::unique_lock<std::mutex> lock(mutex);
    while (true) {
      cv.wait(lock, [this] { return ready; });
      if (stop) break;
      ready = false;
      lock.unlock();
      const char *response = client == nullptr
        ? td_receive(timeout)
        : td_json_client_receive(client, timeout);
      // TDLib stores the response in thread-local storage that is deallocated
      // on execute() and receive(). Since we never call execute() in this
      // thread, it should be safe not to copy the response here.
      lock.lock();
      // bun doesn't call the callback if data is nullptr, so pass an empty
      // string instead
      char *data = const_cast<char *>(response == nullptr ? empty_str : response);
      tsfn.NonBlockingCall(data);
    }
    tsfn.Release();
    // NOTE: Given that this thread is not calling receive anymore, the last
    // response (if not null) probably will stay to be allocated forever. That
    // should not be a big deal.
  }

  void *client;
  double timeout;
  Tsfn tsfn;
  std::unique_ptr<Napi::Promise::Deferred> deferred;
  bool ready {false};
  bool stop {false};
  std::mutex mutex;
  std::condition_variable cv;
  std::thread thread;
};

// Old tdjson interface
namespace Tdo {
  Napi::Value ClientCreate(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();
    if (!info[0].IsNumber())
      TYPEFAIL("Expected first argument to be a number", Napi::Value());
    double timeout = info[0].As<Napi::Number>().DoubleValue();
    void *client = td_json_client_create();
    if (client == nullptr)
      FAIL("td_json_client_create returned null", Napi::Value());
    auto worker = new ReceiveWorker(env, client, timeout);
    return Napi::External<ReceiveWorker>::New(env, worker);
  }

  void ClientSend(const Napi::CallbackInfo& info) {
    auto *worker = info[0].As<Napi::External<ReceiveWorker>>().Data();
    std::string request = info[1].As<Napi::String>().Utf8Value();
    td_json_client_send(worker->GetClient(), request.c_str());
  }

  // Do not call again until the promise is resolved/rejected.
  Napi::Value ClientReceive(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();
    auto *worker = info[0].As<Napi::External<ReceiveWorker>>().Data();
    return worker->NewTask(env);
  }

  Napi::Value ClientExecute(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();
    void *client = info[0].IsNull() || info[0].IsUndefined()
      ? nullptr
      : info[0].As<Napi::External<ReceiveWorker>>().Data()->GetClient();
    if (!info[1].IsString())
      TYPEFAIL("Expected second argument to be a string", Napi::Value());
    std::string request = info[1].As<Napi::String>().Utf8Value();
    const char *response = td_json_client_execute(client, request.c_str());
    if (response == nullptr)
      FAIL("td_json_client_execute returned null", Napi::Value());
    return Napi::String::New(env, response);
  }

  // Preferably do not call this if the receive promise is pending.
  void ClientDestroy(const Napi::CallbackInfo& info) {
    auto *worker = info[0].As<Napi::External<ReceiveWorker>>().Data();
    delete worker;
  }
}

// New tdjson interface
namespace Tdn {
  static ReceiveWorker *worker = nullptr;

  // Create the worker and set the receive timeout explicitly.
  void Init(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();
    if (worker != nullptr)
      FAIL("The worker is already initialized");
    if (!info[0].IsNumber())
      TYPEFAIL("Expected first argument (timeout) to be a number");
    double timeout = info[0].As<Napi::Number>().DoubleValue();
    worker = new ReceiveWorker(env, nullptr, timeout);
  }

  void Ref(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();
    if (worker == nullptr) FAIL("The worker is uninitialized");
    worker->Ref(env);
  }

  void Unref(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();
    if (worker == nullptr) FAIL("The worker is uninitialized");
    worker->Unref(env);
  }

  Napi::Value CreateClientId(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();
    if (td_create_client_id == nullptr)
      FAIL("td_create_client_id is not available", Napi::Value());
    if (td_send == nullptr)
      FAIL("td_send is not available", Napi::Value());
    if (td_receive == nullptr)
      FAIL("td_receive is not available", Napi::Value());
    if (worker == nullptr)
      FAIL("The worker is uninitialized", Napi::Value());
    int client_id = td_create_client_id();
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
    if (!info[0].IsString())
      TYPEFAIL("Expected first argument to be a string", Napi::Value());
    std::string request = info[0].As<Napi::String>().Utf8Value();
    const char *response = td_execute(request.c_str());
    if (response == nullptr)
      FAIL("td_execute returned null", Napi::Value());
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

  static Tsfn tsfn = nullptr;
  static std::mutex tsfn_mutex;

  // NOTE: If TDLib exits with SIGABRT right after the verbosity_level=0 message,
  // we won't actually have a chance to pass the message to the main thread.
  extern "C" void c_message_callback (int verbosity_level, const char *message) {
    {
      std::lock_guard<std::mutex> lock(tsfn_mutex);
      if (tsfn == nullptr) return;
      auto *data = new TsfnData { verbosity_level, std::string(message) };
      tsfn.NonBlockingCall(data);
    }
    if (verbosity_level == 0) {
      // Hack for the aforementioned issue. Note that there is still no guarantee
      // that the callback will be executed. For example, td_execute(addLogMessage)
      // with verbosity_level=0 runs this function on the main thread.
      std::this_thread::sleep_for(std::chrono::seconds(5));
    }
  }

  void SetLogMessageCallback(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();
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
    tsfn = Tsfn::New(env, info[1].As<Napi::Function>(), "TdCallbackTSFN", 0, 1);
    tsfn.Unref(env);
    td_set_log_message_callback(max_verbosity_level, &c_message_callback);
  }
}

#define FINDFUNC(F) \
  F = (F##_t) dlsym(handle, #F); \
  if ((dlsym_err_cstr = dlerror()) != nullptr) { \
    std::string dlsym_err(dlsym_err_cstr); \
    FAIL("Failed to get " #F ": " + dlsym_err, Napi::Value()); \
  } \
  if (F == nullptr) { \
    FAIL("Failed to get " #F " (null)", Napi::Value()); \
  }

// #define FINDFUNC_OPT(F) \
//   F = (F##_t) dlsym(handle, #F); \
//   dlerror();

Napi::Value LoadTdjson(const Napi::CallbackInfo& info) {
  Napi::Env env = info.Env();
  if (td_create_client_id != nullptr) // Already loaded
    return Napi::Boolean::New(env, false);
  std::string library_file = info[0].As<Napi::String>().Utf8Value();
  dlerror(); // Clear errors
  void *handle = DLOPEN(library_file.c_str());
  char *dlopen_err_cstr = dlerror();
  if (handle == nullptr) {
    std::string dlopen_err(dlopen_err_cstr == nullptr ? "NULL" : dlopen_err_cstr);
    FAIL("Dynamic Loading Error: " + dlopen_err, Napi::Value());
  }
  char *dlsym_err_cstr;
  FINDFUNC(td_json_client_create);
  FINDFUNC(td_json_client_send);
  FINDFUNC(td_json_client_receive);
  FINDFUNC(td_json_client_execute);
  FINDFUNC(td_json_client_destroy);
  FINDFUNC(td_create_client_id);
  FINDFUNC(td_send);
  FINDFUNC(td_receive);
  FINDFUNC(td_execute);
  FINDFUNC(td_set_log_message_callback);
  return Napi::Boolean::New(env, true);
}

Napi::Object Init(Napi::Env env, Napi::Object exports) {
  exports["tdoCreate"] = Napi::Function::New(env, Tdo::ClientCreate, "create");
  exports["tdoSend"] = Napi::Function::New(env, Tdo::ClientSend, "send");
  exports["tdoReceive"] = Napi::Function::New(env, Tdo::ClientReceive, "receive");
  exports["tdoExecute"] = Napi::Function::New(env, Tdo::ClientExecute, "execute");
  exports["tdoDestroy"] = Napi::Function::New(env, Tdo::ClientDestroy, "destroy");
  exports["tdnInit"] = Napi::Function::New(env, Tdn::Init, "init");
  exports["tdnRef"] = Napi::Function::New(env, Tdn::Ref, "ref");
  exports["tdnUnref"] = Napi::Function::New(env, Tdn::Unref, "unref");
  exports["tdnCreateClientId"] =
    Napi::Function::New(env, Tdn::CreateClientId, "createClientId");
  exports["tdnSend"] = Napi::Function::New(env, Tdn::Send, "send");
  exports["tdnReceive"] = Napi::Function::New(env, Tdn::Receive, "receive");
  exports["tdnExecute"] = Napi::Function::New(env, Tdn::Execute, "execute");
  exports["setLogMessageCallback"] =
    Napi::Function::New(env, TdCallbacks::SetLogMessageCallback, "setLogMessageCallback");
  exports["loadTdjson"] = Napi::Function::New(env, LoadTdjson, "loadTdjson");
  return exports;
}

NODE_API_MODULE(addon, Init)
