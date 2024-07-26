import mC from "@src/messages/constants/otp";
import { setResendCodeToTrue } from "@src/utilities/user/crud";
import { returnCheckMessage } from "@src/utilities/misc";

export const generateOTPAndExpiry = () => {
  const dateExpiration = new Date();
  const generatedOTP = String(
    Math.floor(mC.tenvalues_otp + Math.random() * mC.ninevalues_otp),
  );
  const expiry = dateExpiration.setTime(
    new Date().getTime() + mC.expiry_seconds,
  );

  return { generatedOTP, expiry };
};

export const implementSetResendCodeValueToTrue = (id: string) => {
  setResendCodeToTrue(id);
  returnCheckMessage(mC.otp_expired);
};
