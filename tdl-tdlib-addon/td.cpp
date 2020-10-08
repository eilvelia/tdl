#include <napi.h>

extern "C" {
  void *td_json_client_create();
  void td_json_client_send(void *client, const char *request);
  const char *td_json_client_receive(void *client, double timeout);
  const char *td_json_client_execute(void *client, const char *request);
  void td_json_client_destroy(void *client);

  int td_set_log_file_path(const char *file_path);
  void td_set_log_max_file_size(long long max_file_size);
  void td_set_log_verbosity_level(int new_verbosity_level);
  typedef void (*td_log_fatal_error_callback_ptr)(const char *error_message);
  void td_set_log_fatal_error_callback(td_log_fatal_error_callback_ptr callback);
}

// #include <iostream>

Napi::ArrayBuffer td_client_create(const Napi::CallbackInfo& info) {
  Napi::Env env = info.Env();
  void* client = td_json_client_create();
  return Napi::ArrayBuffer::New(env, client, 0);
}

void td_client_send(const Napi::CallbackInfo& info) {
  void* client = info[0].As<Napi::ArrayBuffer>().Data();
  std::string request_str = info[1].As<Napi::String>().Utf8Value();
  const char* request = request_str.c_str();
  td_json_client_send(client, request);
}

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
  void* client = info[0].As<Napi::ArrayBuffer>().Data();
  double timeout = info[1].As<Napi::Number>().DoubleValue();
  Napi::Function cb = info[2].As<Napi::Function>();
  (new ReceiverAsyncWorker(cb, client, timeout))->Queue();
}

Napi::Value td_client_execute(const Napi::CallbackInfo& info) {
  Napi::Env env = info.Env();
  void* client = info[0].IsNull() ? NULL : info[0].As<Napi::ArrayBuffer>().Data();
  std::string request_str = info[1].As<Napi::String>().Utf8Value();
  const char* request = request_str.c_str();
  // std::cout << request << std::endl;
  const char* response = td_json_client_execute(client, request);
  if (response == NULL) return env.Null();
  // std::cout << response << std::endl;
  return Napi::String::New(env, response);
}

void td_client_destroy(const Napi::CallbackInfo& info) {
  void* client = info[0].As<Napi::ArrayBuffer>().Data();
  td_json_client_destroy(client);
}

Napi::Number td_set_file_path(const Napi::CallbackInfo& info) {
  Napi::Env env = info.Env();
  std::string filepath = info[0].As<Napi::String>().Utf8Value();
  int out = td_set_log_file_path(filepath.c_str());
  return Napi::Number::New(env, out);
}

void td_set_max_file_size(const Napi::CallbackInfo& info) {
  std::string max_file_size_str = info[0].As<Napi::String>().Utf8Value();
  long long max_file_size = stoll(max_file_size_str);
  td_set_log_max_file_size(max_file_size);
}

void td_set_verbosity_level(const Napi::CallbackInfo& info) {
  auto level = (int) info[0].As<Napi::Number>().Int32Value();
  td_set_log_verbosity_level(level);
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
    "td_set_file_path", Napi::Function::New(env, td_set_file_path));
  exports.Set(
    "td_set_max_file_size", Napi::Function::New(env, td_set_max_file_size));
  exports.Set(
    "td_set_verbosity_level", Napi::Function::New(env, td_set_verbosity_level));
  exports.Set(
    "td_set_fatal_error_callback", Napi::Function::New(env, td_set_fatal_error_callback));
  return exports;
}

NODE_API_MODULE(addon, Init)
