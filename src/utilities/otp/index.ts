import { constantValuesForMessages } from "@src/values/constants";

export const generateOTPAndExpiry = () => {
  const m = constantValuesForMessages();
  const dateExpiration = new Date();
  const generatedOTP = String(
    Math.floor(m.tenvalues_otp + Math.random() * m.ninevalues_otp),
  );
  const expiry = dateExpiration.setTime(
    new Date().getTime() + m.expiry_seconds,
  );

  return { generatedOTP, expiry };
};
