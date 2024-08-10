const m = (function () {
  // User Messages
  const USERS_TO_GET = 500;
  const USER = "user";
  const USERS_URL = "/users";
  const USER_DOES_NOT_EXIST = "User does not exist";
  const USER_OTP_RESEND_DONE = "A new OTP was sent";
  const RECORD_CREATED_MESSAGE = "A new user was created";
  const USER_MESSAGE_EXIST_ON_EMAIL = "Email already exist";
  const USERS_PROPERTIES =
    "-__v -password -isVerified -isResendCode -expiresAt";
  const USER_IS_VERIFIED = "This user has been verified already";
  const USER_IS_NOT_FOR_OTP_RESEND = "This user is not yet for OTP Resend";

  return (function () {
    return {
      user: USER,
      users_url: USERS_URL,
      users_to_get: USERS_TO_GET,
      user_is_verified: USER_IS_VERIFIED,
      users_properties: USERS_PROPERTIES,
      user_does_not_exist: USER_DOES_NOT_EXIST,
      user_otp_resend_done: USER_OTP_RESEND_DONE,
      record_created_message: RECORD_CREATED_MESSAGE,
      user_is_not_for_otp_resend: USER_IS_NOT_FOR_OTP_RESEND,
      user_message_exist_on_email: USER_MESSAGE_EXIST_ON_EMAIL,
    };
  })();
})();

export default m;
