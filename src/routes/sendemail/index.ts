import mU from "@src/messages/constants/user";
import { sendOTPEmail } from "@src/services/controllers/sendemail";
import { postRouteFactory } from "@src/utilities/routes_factory/post";

export const postSendOTPEmail = postRouteFactory(
  "email",
  `${mU.api_url}/send-otp-email`,
  sendOTPEmail,
);
