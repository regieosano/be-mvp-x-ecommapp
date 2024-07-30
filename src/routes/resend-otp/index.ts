import mC from "@src/messages/constants/otp";
import mU from "@src/messages/constants/user";
import { sendResetOTPEmail } from "@src/services/controllers/resend-otp";
import { postRouteFactory } from "@src/routes/_routesFactory/post";

export const postResendOTP = postRouteFactory(
  mC.resend_otp,
  `${mU.users_url}${mC.resend_otp_url}`,
  sendResetOTPEmail,
);
