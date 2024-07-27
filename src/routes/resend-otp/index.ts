import mU from "@src/messages/constants/user";
import { sendResetOTPEmail } from "@src/services/controllers/resend-otp";
import { postRouteFactory } from "@src/utilities/routes_factory/post";

export const postResendOTP = postRouteFactory(
  "resend-otp",
  `${mU.api_url}/resend-otp`,
  sendResetOTPEmail,
);
