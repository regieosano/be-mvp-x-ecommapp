import mU from "@src/messages/constants/user";
import messageValue from "@src/messages/messagevalues";
import { postRouteFactory } from "@src/routes/_routesFactory/post";
import { sendResetOTPEmail } from "@src/services/controllers/resend-otp";

export const postResendOTP = postRouteFactory(
  messageValue.resend_otp,
  `${mU.users_url}${messageValue.resend_otp_url}`,
  sendResetOTPEmail,
);
