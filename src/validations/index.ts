import { userValidation } from "@src/validations/user";
import { otpDataValidation } from "@src/validations/otp";
import { productValidation } from "@src/validations/product";
import { emailOtpDataValidation } from "@src/validations/email";
import { resendOtpDataValidation } from "@src/validations/resend-otp";
import constantMessageValue from "@src/constants/stringnummisc";
import { shoppingCartValidation } from "@src/validations/shopping-cart";

export const validationsObjectArray = [
  { entity: constantMessageValue.user, validation: userValidation },
  { entity: constantMessageValue.otp, validation: otpDataValidation },
  { entity: constantMessageValue.product, validation: productValidation },
  { entity: constantMessageValue.email, validation: emailOtpDataValidation },
  {
    entity: constantMessageValue.resend_otp,
    validation: resendOtpDataValidation,
  },
  {
    entity: constantMessageValue.shopping_cart,
    validation: shoppingCartValidation,
  },
];
