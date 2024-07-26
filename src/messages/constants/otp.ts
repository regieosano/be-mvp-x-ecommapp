const m = (function () {
  // OTP Messages
  const OTP_INVALID = "OTP is invalid";
  const OTP_EXPIRED = "OTP already expired";
  const OTP_VALID = "OTP is valid and User is verified";
  const TENVALUES_OTP = 100000;
  const NINEVALUES_OTP = 900000;
  const EXPIRY_SECONDS = 5 * 60 * 1000;
  const EXPIRY_SECONDS_FOR_RESEND_CODE = 35 * 1000;

  return (function () {
    return {
      tenvalues_otp: TENVALUES_OTP,
      ninevalues_otp: NINEVALUES_OTP,
      expiry_seconds: EXPIRY_SECONDS,
      otp_invalid: OTP_INVALID,
      otp_expired: OTP_EXPIRED,
      otp_valid: OTP_VALID,
      expiry_seconds_for_resend_code: EXPIRY_SECONDS_FOR_RESEND_CODE,
    };
  })();
})();

export default m;
