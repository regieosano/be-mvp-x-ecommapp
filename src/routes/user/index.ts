import mU from "@src/messages/constants/user";
import { createUser } from "@src/services/controllers/user";
import { getVerifiedUsers } from "@src/services/controllers/user";
import { getRouteFactory } from "@src/utilities/routes_factory/get";
import { postRouteFactory } from "@src/utilities/routes_factory/post";

export const postUser = postRouteFactory(mU.user, mU.api_url, createUser);
export const getUsers = getRouteFactory(
  mU.api_url,
  mU.users_to_get,
  getVerifiedUsers,
);
