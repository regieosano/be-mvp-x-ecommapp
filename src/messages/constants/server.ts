const m = (function () {
  // Server Messages
  const SERVER_RUNNING_MESSAGE = "Server is running on Localhost PORT";
  const INTERNAL_SERVER_MESSAGE = "Server Info: ";
  const API_ROOT_RESPONSE = "BE APIs";
  const API_ALL = "*";
  const API_MAIN_SLASH = "/";
  const NON_EXISTING_ENDPOINT = "Endpoint does not EXIST!";
  const SOMETHING_WENT_WRONG = "Something went wrong";

  return (function () {
    return {
      server_running_message: SERVER_RUNNING_MESSAGE,
      internal_server_message: INTERNAL_SERVER_MESSAGE,
      something_went_wrong: SOMETHING_WENT_WRONG,
      api_main_slash: API_MAIN_SLASH,
      api_all: API_ALL,
      api_root_response: API_ROOT_RESPONSE,
      non_existing_endpoint: NON_EXISTING_ENDPOINT,
    };
  })();
})();

export default m;
