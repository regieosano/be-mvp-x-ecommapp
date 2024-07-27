import {
  postUser,
  postProduct,
  postAuthUser,
  postSendOTPEmail,
  getUsers,
  getProducts,
} from "@src/routes";

// import { postResendOTP } from "@src/routes/resend-otp";

export const routesArray = [
  getUsers,
  getProducts,
  postUser,
  postProduct,
  postAuthUser,
  postSendOTPEmail,
];
