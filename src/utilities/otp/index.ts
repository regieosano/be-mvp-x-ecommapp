import { m } from "@src/values/constants";
import { setResendCodeToTrue } from "@src/utilities/user/crud";
import { returnCheckMessage } from "@src/utilities/misc";

export const generateOTPAndExpiry = () => {
  const dateExpiration = new Date();
  const generatedOTP = String(
    Math.floor(m.tenvalues_otp + Math.random() * m.ninevalues_otp),
  );
  const expiry = dateExpiration.setTime(
    new Date().getTime() + m.expiry_seconds,
  );

  return { generatedOTP, expiry };
};

export const implementSetResendCodeValueToTrue = (id: string) => {
  setResendCodeToTrue(id);
  returnCheckMessage(m.otp_expired);
};
