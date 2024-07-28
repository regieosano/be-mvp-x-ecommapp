import _ from "lodash";
import mC from "@src/messages/constants/otp";
import { setResendCodeToTrue } from "@src/utilities/user/crud";
import { returnCheckMessage } from "@src/utilities/misc";

export const generateOTPAndExpiry = () => {
  const dateExpiration = new Date();
  const generatedOTP = String(
    Math.floor(
      _.sum([mC.tenvalues_otp, _.multiply(Math.random(), mC.ninevalues_otp)]),
    ),
  );
  const expiry = dateExpiration.setTime(
    _.sum([new Date().getTime(), mC.expiry_seconds]),
  );

  return { generatedOTP, expiry };
};

export const implementSetResendCodeValueToTrue = (id: string) => {
  setResendCodeToTrue(id);
  returnCheckMessage(mC.otp_expired);
};
