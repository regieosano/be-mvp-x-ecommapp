import mU from "@src/messages/constants/user";
import messageValue from "@src/messages/messagevalues";
import { sendOTPEmail } from "@src/services/controllers/sendemail";
import { postRouteFactory } from "@src/routes/_routesFactory/post";

export const postSendOTPEmail = postRouteFactory(
  messageValue.email,
  `${mU.users_url}${messageValue.email_otp_url}`,
  sendOTPEmail,
);
