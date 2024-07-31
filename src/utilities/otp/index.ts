import { multiply, sum } from "ramda";
import mC from "@src/messages/constants/otp";
import { setUserResendCodeToTrue } from "@src/utilities/user";
import { returnCheckMessage } from "@src/utilities/misc/check";

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

export const implementSetResendCodeValueToTrue = (_id: string) => {
  setUserResendCodeToTrue(_id);
  returnCheckMessage(mC.otp_expired);
};
