import messageValue from "@src/messages/messagevalues";
import { sumTheTwo, multiplyTheTwo } from "@src/functions";

export const generateOTPAndExpiry = () => {
  const dateExpiration = new Date();

  const generatedOTP = String(
    Math.floor(
      sumTheTwo([
        messageValue.tenvalues_otp,
        multiplyTheTwo(Math.random(), messageValue.ninevalues_otp),
      ]),
    ),
  );
  const expiry = dateExpiration.setTime(
    sumTheTwo([new Date().getTime(), messageValue.expiry_seconds]),
  );

  return { generatedOTP, expiry };
};
