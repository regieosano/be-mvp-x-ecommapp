import mU from "@src/messages/constants/user";
import { createUser } from "@src/services/controllers/user";
import { getVerifiedUsers } from "@src/services/controllers/user";
import { getRouteFactory } from "@src/routes/_routesFactory/get";
import { postRouteFactory } from "@src/routes/_routesFactory/post";

export const postUser = postRouteFactory(mU.user, mU.users_url, createUser);
export const getUsers = getRouteFactory(
  mU.users_url,
  mU.users_to_get,
  getVerifiedUsers,
);
