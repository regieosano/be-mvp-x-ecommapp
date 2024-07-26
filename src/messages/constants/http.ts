const m = (function () {
  // HTTP Messages
  const OK = 200;
  const CREATED = 201;
  const EXPIRED = 419;
  const NOT_FOUND = 404;
  const INTERNAL_SERVER_ERROR_CODE = 500;
  const USERS_PROPERTIES =
    "-_id -__v -password -isVerified -isResendCode -otp -expiresAt";

  return (function () {
    return {
      ok: OK,
      created: CREATED,
      expired: EXPIRED,
      not_found: NOT_FOUND,
      internal_server_error_code: INTERNAL_SERVER_ERROR_CODE,
      user_properties: USERS_PROPERTIES,
    };
  })();
})();

export default m;
