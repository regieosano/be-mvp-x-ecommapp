import Joi from "joi";
import { OTPData } from "@src/types";

export const otpDataValidation = function (otpBodyData: OTPData) {
  const otpBodyDataForChecking = { ...otpBodyData };

  function validateOTPBodyData() {
    return Joi.object({
      id: Joi.string().min(5).max(255).required(),
      otp: Joi.string().min(6).max(6).required(),
    });
  }

  return async function () {
    const { id, otp } = otpBodyDataForChecking;

    try {
      await validateOTPBodyData().validateAsync({
        id,
        otp,
      });
    } catch (error: any) {
      const details = error["details"][0].message;
      const errorObject = { error: details };
      return errorObject;
    }
  };
};
