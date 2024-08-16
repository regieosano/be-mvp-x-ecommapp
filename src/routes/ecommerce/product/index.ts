import constantMessageValue from "@src/constants/stringnummisc";
import { getRouteFactory } from "@src/routes/_routesFactory/get";
import { postRouteFactory } from "@src/routes/_routesFactory/post";
import { createProduct } from "@src/services/controllers/ecommerce/product";
import { getApprovedProducts } from "@src/services/controllers/ecommerce/product/actions/queries";

export const getProducts = getRouteFactory(
  constantMessageValue.product_url,
  constantMessageValue.no_products,
  getApprovedProducts,
);

export const postProduct = postRouteFactory(
  constantMessageValue.product,
  constantMessageValue.product_url,
  createProduct,
);
