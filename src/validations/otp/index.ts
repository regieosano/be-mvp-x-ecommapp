import { OTPData } from "@src/types";
import { validateOTPBodyData } from "@src/validations/helper/otpValidation";

export const otpDataValidation = function (otpBodyData: OTPData) {
  const otpBodyDataForChecking = { ...otpBodyData };

  return async function () {
    const { _id, otpInput } = otpBodyDataForChecking;

    try {
      const result = await validateOTPBodyData().validateAsync({
        _id,
        otpInput,
      });

      return result;
    } catch (error: unknown) {
      throw `${error}`;
    }
  };
};
