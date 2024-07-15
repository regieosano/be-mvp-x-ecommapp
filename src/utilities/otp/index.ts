import { constantValuesForMessages } from "@src/values/constants";

export const generateOTPAndExpiry = () => {
  const getConstantValuesMessages = constantValuesForMessages();
  const m = getConstantValuesMessages();
  const expiry = new Date();
  const otp = Math.floor(m.tenvalues_otp + Math.random() * m.ninevalues_otp);
  expiry.setTime(new Date().getTime() + m.expiry_seconds);

  return { otp, expiry };
};

// export const timeExpirationForResendCodeChoice = () => {
//   const expiry = new Date();
//   return expiry.setTime(new Date().getTime() + EXPIRY_SECONDS_FOR_RESEND_CODE);
// };
