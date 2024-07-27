import mU from "@src/messages/constants/user";
import { userValidation } from "@src/validations/user";
import { productValidation } from "src/validations/product";
import { otpDataValidation } from "@src/validations/otp";
import { emailOtpDataValidation } from "@src/validations/email";
import { resendOtpDataValidation } from "@src/validations/resend-otp";

export const validationsObjectArray = [
  { entity: mU.user, validation: userValidation },
  { entity: "product", validation: productValidation },
  { entity: "otp", validation: otpDataValidation },
  { entity: "email", validation: emailOtpDataValidation },
  { entity: "resend-otp", validation: resendOtpDataValidation },
];
