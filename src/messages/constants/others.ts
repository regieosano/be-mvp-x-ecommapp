const m = (function () {
  // Other Messages
  const FIRST = 0;
  const NULL = null;
  const YES = true;
  const NO = false;
  const EMPTY_STRING = "";
  const API_PREFIX = "/users";
  const MAIN_PREFIX = "/api";

  return (function () {
    return {
      no: NO,
      yes: YES,
      null: NULL,
      first: FIRST,
      api_prefix: API_PREFIX,
      main_prefix: MAIN_PREFIX,
      empty_string: EMPTY_STRING,
    };
  })();
})();

export default m;
