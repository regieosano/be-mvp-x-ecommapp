import mU from "@src/messages/constants/user";
import mC from "@src/messages/constants/otp";
import { postRouteFactory } from "@src/utilities/routes_factory/post";
import { authenticateUser } from "@src/services/controllers/authentication";

export const postAuthUser = postRouteFactory(
  mC.otp,
  `${mU.users_url}${mC.verify_otp_url}`,
  authenticateUser,
);
