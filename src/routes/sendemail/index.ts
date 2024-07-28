import mU from "@src/messages/constants/user";
import mE from "@src/messages/constants/email";
import { sendOTPEmail } from "@src/services/controllers/sendemail";
import { postRouteFactory } from "@src/utilities/routes_factory/post";

export const postSendOTPEmail = postRouteFactory(
  mE.email,
  `${mU.users_url}${mE.email_otp_url}`,
  sendOTPEmail,
);
