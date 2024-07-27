import mU from "@src/messages/constants/user";
import { postRouteFactory } from "@src/utilities/routes_factory/post";
import { authenticateUser } from "@src/services/controllers/authentication";

export const postAuthUser = postRouteFactory(
  "otp",
  `${mU.api_url}/verify-otp`,
  authenticateUser,
);
