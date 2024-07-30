import mU from "@src/messages/constants/user";
import mE from "@src/messages/constants/email";
import { sendOTPEmail } from "@src/services/controllers/sendemail";
import { postRouteFactory } from "@src/routes/_routesFactory/post";

export const postSendOTPEmail = postRouteFactory(
  mE.email,
  `${mU.users_url}${mE.email_otp_url}`,
  sendOTPEmail,
);
