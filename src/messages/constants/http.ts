const m = (function () {
  // HTTP Messages
  const OK = 200;
  const CREATED = 201;
  const EXPIRED = 419;
  const NOT_FOUND = 404;
  const INTERNAL_SERVER_ERROR_CODE = 500;
  const USERS_PROPERTIES =
    "-__v -password -isVerified -isResendCode -otp -expiresAt";

  return (function () {
    return {
      ok: OK,
      created: CREATED,
      expired: EXPIRED,
      not_found: NOT_FOUND,
      user_properties: USERS_PROPERTIES,
      internal_server_error_code: INTERNAL_SERVER_ERROR_CODE,
    };
  })();
})();

export default m;
