import mV from "@src/messages/constants/validation";
import { userValidation } from "@src/validations/user";
import { otpDataValidation } from "@src/validations/otp";
import { productValidation } from "@src/validations/product";
import { emailOtpDataValidation } from "@src/validations/email";
import { resendOtpDataValidation } from "@src/validations/resend-otp";
import { shoppingCartValidation } from "@src/validations/shopping-cart";

export const validationsObjectArray = [
  { entity: mV.user, validation: userValidation },
  { entity: mV.otp, validation: otpDataValidation },
  { entity: mV.product, validation: productValidation },
  { entity: mV.email, validation: emailOtpDataValidation },
  { entity: mV.resend_otp, validation: resendOtpDataValidation },
  { entity: mV.shopping_cart, validation: shoppingCartValidation },
];
