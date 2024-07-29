import { multiply, sum } from "ramda";
import mC from "@src/messages/constants/otp";
import { setResendCodeToTrue } from "@src/utilities/user/crud/create";
import { returnCheckMessage } from "@src/utilities/misc";

export const generateOTPAndExpiry = () => {
  const dateExpiration = new Date();
  const generatedOTP = String(
    Math.floor(
      sum([mC.tenvalues_otp, multiply(Math.random(), mC.ninevalues_otp)]),
    ),
  );
  const expiry = dateExpiration.setTime(
    sum([new Date().getTime(), mC.expiry_seconds]),
  );

  return { generatedOTP, expiry };
};

export const implementSetResendCodeValueToTrue = (id: string) => {
  setResendCodeToTrue(id);
  returnCheckMessage(mC.otp_expired);
};
