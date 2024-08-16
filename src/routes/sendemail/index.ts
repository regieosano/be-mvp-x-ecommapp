import constantMessageValue from "@src/constants/stringnummisc";
import { sendOTPEmail } from "@src/services/controllers/sendemail";
import { postRouteFactory } from "@src/routes/_routesFactory/post";

export const postSendOTPEmail = postRouteFactory(
  constantMessageValue.email,
  `${constantMessageValue.users_url}${constantMessageValue.email_otp_url}`,
  sendOTPEmail,
);
