import constantMessageValue from "@src/constants/stringnummisc";
import { postRouteFactory } from "@src/routes/_routesFactory/post";
import { sendResetOTPEmail } from "@src/services/controllers/resend-otp";

export const postResendOTP = postRouteFactory(
  constantMessageValue.resend_otp,
  `${constantMessageValue.users_url}${constantMessageValue.resend_otp_url}`,
  sendResetOTPEmail,
);
