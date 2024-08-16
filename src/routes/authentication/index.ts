import constantMessageValue from "@src/constants/stringnummisc";
import { postRouteFactory } from "@src/routes/_routesFactory/post";
import { authenticateUser } from "@src/services/controllers/authentication";

export const postAuthUser = postRouteFactory(
  constantMessageValue.otp,
  `${constantMessageValue.users_url}${constantMessageValue.verify_otp_url}`,
  authenticateUser,
);
