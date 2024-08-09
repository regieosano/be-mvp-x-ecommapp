import mC from "@src/messages/constants/otp";
import { sumTheTwo, multiplyTheTwo } from "@src/functions";

export const generateOTPAndExpiry = () => {
  const dateExpiration = new Date();
  const generatedOTP = String(
    Math.floor(
      sumTheTwo([
        mC.tenvalues_otp,
        multiplyTheTwo(Math.random(), mC.ninevalues_otp),
      ]),
    ),
  );
  const expiry = dateExpiration.setTime(
    sumTheTwo([new Date().getTime(), mC.expiry_seconds]),
  );

  return { generatedOTP, expiry };
};
