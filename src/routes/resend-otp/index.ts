import mU from "@src/messages/constants/user";
import mC from "@src/messages/constants/otp";
import { sendResetOTPEmail } from "@src/services/controllers/resend-otp";
import { postRouteFactory } from "@src/utilities/routes_factory/post";

export const postResendOTP = postRouteFactory(
  mC.resend_otp,
  `${mU.users_url}${mC.resend_otp_url}`,
  sendResetOTPEmail,
);
