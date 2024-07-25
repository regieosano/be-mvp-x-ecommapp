import { getUsers, postUser } from "@src/routes/user";
import { postProduct } from "@src/routes/ecommerce/product";
import { postAuthUser } from "@src/routes/authentication";
import { postResendOTP } from "@src/routes/resend-otp";
import { postSendOTPEmail } from "@src/routes/sendemail";

export const routesArray = [
  getUsers,
  postUser,
  postProduct,
  postAuthUser,
  postResendOTP,
  postSendOTPEmail,
];
