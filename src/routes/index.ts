import mU from "@src/messages/constants/user";
import mP from "@src/messages/constants/product";
import { createUser } from "@src/services/controllers/user";
import { createProduct } from "@src/services/controllers/ecommerce/product";
import { authenticateUser } from "@src/services/controllers/authentication";
import { sendOTPEmail } from "@src/services/controllers/sendemail";
import { getVerifiedUsers } from "@src/services/controllers/user";
import { getApprovedProducts } from "@src/services/controllers/ecommerce/product/actions/queries";

import { postRouteFactory } from "@src/utilities/routes_factory/post";
import { getRouteFactory } from "@src/utilities/routes_factory/get";

export const postUser = postRouteFactory(mU.user, mU.api_url, createUser);
export const postProduct = postRouteFactory(
  mP.product,
  mP.api_url,
  createProduct,
);
export const postAuthUser = postRouteFactory(
  "otp",
  `${mU.api_url}/verify-otp`,
  authenticateUser,
);
export const postSendOTPEmail = postRouteFactory(
  "email",
  `${mU.api_url}/send-otp-email`,
  sendOTPEmail,
);
export const getUsers = getRouteFactory(
  mU.api_url,
  mU.users_to_get,
  getVerifiedUsers,
);
export const getProducts = getRouteFactory(
  "/products",
  mP.products_to_get,
  getApprovedProducts,
);
