import mP from "@src/messages/constants/product";
import { postRouteFactory } from "@src/utilities/routes_factory/post";
import { getRouteFactory } from "@src/utilities/routes_factory/get";
import { createProduct } from "@src/services/controllers/ecommerce/product";
import { getApprovedProducts } from "@src/services/controllers/ecommerce/product/actions/queries";

export const getProducts = getRouteFactory(
  "/products",
  mP.products_to_get,
  getApprovedProducts,
);

export const postProduct = postRouteFactory(
  mP.product,
  mP.api_url,
  createProduct,
);
