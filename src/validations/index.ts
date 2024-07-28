import mV from "@src/messages/constants/validation";
import { userValidation } from "@src/validations/user";
import { productValidation } from "src/validations/product";
import { otpDataValidation } from "@src/validations/otp";
import { emailOtpDataValidation } from "@src/validations/email";
import { resendOtpDataValidation } from "@src/validations/resend-otp";

export const validationsObjectArray = [
  { entity: mV.user, validation: userValidation },
  { entity: mV.product, validation: productValidation },
  { entity: mV.otp, validation: otpDataValidation },
  { entity: mV.email, validation: emailOtpDataValidation },
  { entity: mV.resend_otp, validation: resendOtpDataValidation },
];
