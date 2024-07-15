import {
  TENVALUES_OTP,
  NINEVALUES_OTP,
  EXPIRY_SECONDS,
  EXPIRY_SECONDS_FOR_RESEND_CODE,
} from "@src/values/constants";

export const generateOTPAndExpiry = () => {
  const expiry = new Date();
  const otp = Math.floor(TENVALUES_OTP + Math.random() * NINEVALUES_OTP);
  expiry.setTime(new Date().getTime() + EXPIRY_SECONDS);

  return { otp, expiry };
};

// export const timeExpirationForResendCodeChoice = () => {
//   const expiry = new Date();
//   return expiry.setTime(new Date().getTime() + EXPIRY_SECONDS_FOR_RESEND_CODE);
// };
