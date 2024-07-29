const m = (function () {
  // OTP Messages
  const OTP = "otp";
  const TENVALUES_OTP = 100000;
  const NINEVALUES_OTP = 900000;
  const RESEND_OTP = "resend-otp";
  const RESEND_OTP_URL = "/resend-otp";
  const VERIFY_OTP_URL = "/verify-otp";
  const OTP_INVALID = "OTP is invalid";
  const EXPIRY_SECONDS = 5 * 60 * 1000;
  const OTP_EXPIRED = "OTP already expired";
  const EXPIRY_SECONDS_FOR_RESEND_CODE = 35 * 1000;
  const OTP_VALID = "OTP is valid and User is verified";
  const OTP_SUCCESSFULLY_VERIFIED = "OTP successfully verified";

  return (function () {
    return {
      otp: OTP,
      otp_valid: OTP_VALID,
      resend_otp: RESEND_OTP,
      otp_invalid: OTP_INVALID,
      otp_expired: OTP_EXPIRED,
      tenvalues_otp: TENVALUES_OTP,
      ninevalues_otp: NINEVALUES_OTP,
      expiry_seconds: EXPIRY_SECONDS,
      resend_otp_url: RESEND_OTP_URL,
      verify_otp_url: VERIFY_OTP_URL,
      otp_successfully_verified: OTP_SUCCESSFULLY_VERIFIED,
      expiry_seconds_for_resend_code: EXPIRY_SECONDS_FOR_RESEND_CODE,
    };
  })();
})();

export default m;
