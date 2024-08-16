import { createUser } from "@src/services/controllers/user";
import { getRouteFactory } from "@src/routes/_routesFactory/get";
import { getVerifiedUsers } from "@src/services/controllers/user";
import { postRouteFactory } from "@src/routes/_routesFactory/post";
import constantMessageValue from "@src/constants/stringnummisc";

export const postUser = postRouteFactory(
  constantMessageValue.user,
  constantMessageValue.users_url,
  createUser,
);
export const getUsers = getRouteFactory(
  constantMessageValue.users_url,
  constantMessageValue.users_to_get,
  getVerifiedUsers,
);
