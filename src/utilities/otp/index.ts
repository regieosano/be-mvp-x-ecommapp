import constantMessageValue from "@src/constants/stringnummisc";
import { sumTheTwo, multiplyTheTwo } from "@src/functions";

export const generateOTPAndExpiry = () => {
  const dateExpiration = new Date();

  const generatedOTP = String(
    Math.floor(
      sumTheTwo([
        constantMessageValue.tenvalues_otp,
        multiplyTheTwo(Math.random(), constantMessageValue.ninevalues_otp),
      ]),
    ),
  );
  const expiry = dateExpiration.setTime(
    sumTheTwo([new Date().getTime(), constantMessageValue.expiry_seconds]),
  );

  return { generatedOTP, expiry };
};
