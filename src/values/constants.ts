export function constantValuesForMessages() {
  // Server Messages
  const SERVER_RUNNING_MESSAGE = "Server is running on Localhost PORT";
  const INTERNAL_SERVER_MESSAGE = "Server Info: ";
  const SOMETHING_WENT_WRONG = "Something went wrong";

  // Email Messages
  const EMAIL_MESSAGE_EXIST = "Email already exist";

  // HTTP Error Codes
  const OK = 200;
  const CREATED = 201;
  const EXPIRED = 419;
  const INTERNAL_SERVER_ERROR_CODE = 500;

  // Boolean Values
  const YES = true;
  const NO = false;
  const DB_IS_TOCONNECT = false;

  // Numeric Values
  const TENVALUES_OTP = 100000;
  const NINEVALUES_OTP = 900000;
  const EXPIRY_SECONDS = 5 * 60 * 1000;
  const EXPIRY_SECONDS_FOR_RESEND_CODE = 35 * 1000;

  // Get Record Messages
  const USERS_TO_GET = 500;

  // Password Hash Value
  const SALT_VALUE = 10;

  // Delete Record in MicroSeconds
  const TIMER_VALUE = 30000;

  // Password Messages
  const PASSWORD_HASH_MESSAGE = "Password entered empty or not valid";
  const DECRYPTION_HASH_MESSAGE = "Error in decrypting hashed password";

  // Record Messages
  const RECORD_CREATED_MESSAGE = "Created one (1) record";
  const USER_OTP_RESEND_DONE = "A new OTP was sent";

  //  OTP Messages
  const OTP_INVALID = "OTP is invalid";
  const OTP_EXPIRED = "OTP already expired";
  const OTP_VALID = "OTP is valid and User is verified";
  const USER_IS_VERIFIED = "This user has been verified already";
  const USER_IS_NOT_FOR_OTP_RESEND = "This user is not yet for OTP Resend";

  // Find Record Messages
  const USER_DOES_NOT_EXIST = "User does not exist";

  return (function () {
    return {
      server_running_message: SERVER_RUNNING_MESSAGE,
      internal_server_message: INTERNAL_SERVER_MESSAGE,
      something_went_wrong: SOMETHING_WENT_WRONG,
      email_message_exist: EMAIL_MESSAGE_EXIST,
      users_to_get: USERS_TO_GET,
      ok: OK,
      created: CREATED,
      internal_server_error_code: INTERNAL_SERVER_ERROR_CODE,
      yes: YES,
      no: NO,
      db_is_toconnect: DB_IS_TOCONNECT,
      tenvalues_otp: TENVALUES_OTP,
      ninevalues_otp: NINEVALUES_OTP,
      expired: EXPIRED,
      expiry_seconds: EXPIRY_SECONDS,
      expiry_seconds_for_resend_code: EXPIRY_SECONDS_FOR_RESEND_CODE,
      salt_value: SALT_VALUE,
      timer_value: TIMER_VALUE,
      password_hash_message: PASSWORD_HASH_MESSAGE,
      decryption_hash_message: DECRYPTION_HASH_MESSAGE,
      record_created_message: RECORD_CREATED_MESSAGE,
      user_otp_resend_done: USER_OTP_RESEND_DONE,
      otp_invalid: OTP_INVALID,
      otp_expired: OTP_EXPIRED,
      user_is_not_for_otp_resend: USER_IS_NOT_FOR_OTP_RESEND,
      otp_valid: OTP_VALID,
      user_is_verified: USER_IS_VERIFIED,
      user_does_not_exist: USER_DOES_NOT_EXIST,
    };
  })();
}
