const m = (function () {
  // Other Messages
  const NULL = null;
  const API_PREFIX = "/users";
  const MAIN_PREFIX = "/api";
  const EMPTY_STRING = "";
  const FIRST = 0;
  const YES = true;
  const NO = false;

  return (function () {
    return {
      null: NULL,
      api_prefix: API_PREFIX,
      main_prefix: MAIN_PREFIX,
      empty_string: EMPTY_STRING,
      first: FIRST,
      yes: YES,
      no: NO,
    };
  })();
})();

export default m;
