const m = (function () {
  // Other Messages
  const FIRST = 0;
  const YES = true;
  const NO = false;
  const NULL = null;
  const EMPTY_STRING = "";
  const MAIN_PREFIX = "/api";

  return (function () {
    return {
      no: NO,
      yes: YES,
      null: NULL,
      first: FIRST,
      main_prefix: MAIN_PREFIX,
      empty_string: EMPTY_STRING,
    };
  })();
})();

export default m;
