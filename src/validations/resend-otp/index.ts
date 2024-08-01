import { ResendOTP } from "@src/types";
import { validateResendOtpBodyData } from "@src/validations/helper/resendOtpValidation";

export const resendOtpDataValidation = function (resendOtpBodyData: ResendOTP) {
  const resendOtpBodyDataForChecking = { ...resendOtpBodyData };

  return async function () {
    const { _id } = resendOtpBodyDataForChecking;

    try {
      const result = await validateResendOtpBodyData().validateAsync({
        _id,
      });

      return result;
    } catch (error: unknown) {
      throw `${error}`;
    }
  };
};
