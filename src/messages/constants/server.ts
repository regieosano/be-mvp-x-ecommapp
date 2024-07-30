const m = (function () {
  // Server Messages
  const API_ALL = "*";
  const API_MAIN_SLASH = "/";
  const API_ROOT_RESPONSE = "BE APIs";
  const INTERNAL_SERVER_MESSAGE = "Server Info: ";
  const SOMETHING_WENT_WRONG = "Something went wrong";
  const NON_EXISTING_ENDPOINT = "Endpoint does not EXIST!";
  const SERVER_RUNNING_MESSAGE = "Server is running on Localhost PORT";

  return (function () {
    return {
      api_all: API_ALL,
      api_main_slash: API_MAIN_SLASH,
      api_root_response: API_ROOT_RESPONSE,
      something_went_wrong: SOMETHING_WENT_WRONG,
      non_existing_endpoint: NON_EXISTING_ENDPOINT,
      server_running_message: SERVER_RUNNING_MESSAGE,
      internal_server_message: INTERNAL_SERVER_MESSAGE,
    };
  })();
})();

export default m;
