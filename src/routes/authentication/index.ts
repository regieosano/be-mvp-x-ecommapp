import mU from "@src/messages/constants/user";
import messageValue from "@src/messages/messagevalues";
import { postRouteFactory } from "@src/routes/_routesFactory/post";
import { authenticateUser } from "@src/services/controllers/authentication";

export const postAuthUser = postRouteFactory(
  messageValue.otp,
  `${mU.users_url}${messageValue.verify_otp_url}`,
  authenticateUser,
);
