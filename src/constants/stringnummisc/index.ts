const jsonMerger = require("json-merger");

export default (function stringNumMiscObjectValues() {
  const messagesObject = jsonMerger.mergeFiles([
    "src/constants/stringnummisc/jsonvalues/otp.json",
    "src/constants/stringnummisc/jsonvalues/user.json",
    "src/constants/stringnummisc/jsonvalues/http.json",
    "src/constants/stringnummisc/jsonvalues/email.json",
    "src/constants/stringnummisc/jsonvalues/others.json",
    "src/constants/stringnummisc/jsonvalues/ecommerce.json",
    "src/constants/stringnummisc/jsonvalues/validations.json",
  ]);

  return (function () {
    return messagesObject;
  })();
})();
