import mP from "@src/messages/constants/product";
import { getRouteFactory } from "@src/routes/_routesFactory/get";
import { postRouteFactory } from "@src/routes/_routesFactory/post";
import { createProduct } from "@src/services/controllers/ecommerce/product";
import { getApprovedProducts } from "@src/services/controllers/ecommerce/product/actions/queries";

export const getProducts = getRouteFactory(
  mP.product_url,
  mP.no_products,
  getApprovedProducts,
);

export const postProduct = postRouteFactory(
  mP.product,
  mP.product_url,
  createProduct,
);
