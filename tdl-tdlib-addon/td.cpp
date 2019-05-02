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

Napi::Number td_client_create(const Napi::CallbackInfo& info) {
  Napi::Env env = info.Env();
  void* client = td_json_client_create();
  // std::cout << "Client 1: " << client << std::endl;
  return Napi::Number::New(env, (uintptr_t)client);
}

void td_client_send(const Napi::CallbackInfo& info) {
  auto client = (void*) info[0].As<Napi::Number>().Int64Value();
  std::string request_str = info[1].As<Napi::String>().Utf8Value();
  const char* request = request_str.c_str();
  // std::cout << request << std::endl;
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
    res = std::string(tdres == NULL ? "" : tdres); // copy string
  }

  void OnOK() override {
    Napi::Env env = Env();
    auto str = Napi::String::New(env, res);
    Callback().MakeCallback(Receiver().Value(), { env.Null(), str });
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
  auto client = (void*) info[0].As<Napi::Number>().Int64Value();
  double timeout = info[1].As<Napi::Number>().DoubleValue();
  Napi::Function cb = info[2].As<Napi::Function>();
  (new ReceiverAsyncWorker(cb, client, timeout))->Queue();
}

// Napi::String td_client_receive(const Napi::CallbackInfo& info) {
//   Napi::Env env = info.Env();
//   auto client = (void*) info[0].As<Napi::Number>().Int64Value();
//   double timeout = info[1].As<Napi::Number>().DoubleValue();
//   const char* response = td_json_client_receive(client, timeout);
//   auto str = Napi::String::New(env, response == NULL ? "" : response);
//   return str;
// }

Napi::String td_client_execute(const Napi::CallbackInfo& info) {
  Napi::Env env = info.Env();
  auto client = (void*) info[0].As<Napi::Number>().Int64Value();
  std::string request_str = info[1].As<Napi::String>().Utf8Value();
  const char* request = request_str.c_str();
  // std::cout << request << std::endl;
  const char* response = td_json_client_execute(client, request);
  if (response == NULL) return Napi::String::New(env, "");
  // std::cout << response << std::endl;
  return Napi::String::New(env, response);
}

void td_client_destroy(const Napi::CallbackInfo& info) {
  auto client = (void*) info[0].As<Napi::Number>().Int64Value();
  // std::cout << "Client 2: " << client << std::endl;
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
  int level = (int) info[0].As<Napi::Number>().Int32Value();
  td_set_log_verbosity_level(level);
}

void set_fatal_callback(const Napi::CallbackInfo& info) {
  // TODO:

  // Napi::Env env = info.Env();
  // Napi::Function cb = info[0].As<Napi::Function>();
  // // ...
  // cb.MakeCallback(env.Global(), { Napi::String::New(env, error_message) });
  // // td_set_log_fatal_error_callback(...);
}

void remove_fatal_callback(const Napi::CallbackInfo& info) {
  td_set_log_fatal_error_callback(NULL);
}

Napi::Object Init(Napi::Env env, Napi::Object exports) {
  exports.Set("td_client_create", Napi::Function::New(env, td_client_create));
  exports.Set("td_client_send", Napi::Function::New(env, td_client_send));
  exports.Set("td_client_receive", Napi::Function::New(env, td_client_receive));
  exports.Set("td_client_execute", Napi::Function::New(env, td_client_execute));
  exports.Set("td_client_destroy", Napi::Function::New(env, td_client_destroy));
  exports.Set("td_set_file_path", Napi::Function::New(env, td_set_file_path));
  exports.Set("td_set_max_file_size", Napi::Function::New(env, td_set_max_file_size));
  exports.Set("td_set_verbosity_level", Napi::Function::New(env, td_set_verbosity_level));
  exports.Set("set_fatal_callback", Napi::Function::New(env, set_fatal_callback));
  exports.Set("remove_fatal_callback", Napi::Function::New(env, remove_fatal_callback));
  return exports;
}

NODE_API_MODULE(addon, Init)
