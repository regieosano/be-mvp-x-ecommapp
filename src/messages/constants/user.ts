const m = (function () {
  // User Messages
  const USERS_TO_GET = 500;
  const USERS_PROPERTIES =
    "-_id -__v -password -isVerified -isResendCode -otp -expiresAt";
  const USER_DOES_NOT_EXIST = "User does not exist";
  const RECORD_CREATED_MESSAGE = "Created one (1) record";
  const USER_OTP_RESEND_DONE = "A new OTP was sent";
  const USER_IS_VERIFIED = "This user has been verified already";
  const USER_MESSAGE_EXIST_ON_EMAIL = "Email already exist";
  const USER_IS_NOT_FOR_OTP_RESEND = "This user is not yet for OTP Resend";

  return (function () {
    return {
      users_to_get: USERS_TO_GET,
      users_properties: USERS_PROPERTIES,
      user_does_not_exist: USER_DOES_NOT_EXIST,
      record_created_message: RECORD_CREATED_MESSAGE,
      user_otp_resend_done: USER_OTP_RESEND_DONE,
      user_is_verified: USER_IS_VERIFIED,
      user_is_not_for_otp_resend: USER_IS_NOT_FOR_OTP_RESEND,
      user_message_exist_on_email: USER_MESSAGE_EXIST_ON_EMAIL,
    };
  })();
})();

export default m;
