import { getRouteFactory } from "@src/routes/_routesFactory/get";
import { postRouteFactory } from "@src/routes/_routesFactory/post";
import constantMessageValue from "@src/constants/stringnummisc";
import { createShoppingCart } from "@src/services/controllers/ecommerce/shopping-cart";
import { getShoppingCarts } from "@src/services/controllers/ecommerce/shopping-cart/actions/queries/shoppingCarts";
import { getShoppingCartsByShopper } from "@src/services/controllers/ecommerce/shopping-cart/actions/queries/shoppingCart";

export const getAllShoppingCarts = getRouteFactory(
  constantMessageValue.all_shopping_carts_url,
  constantMessageValue.no_products,
  getShoppingCarts,
);

export const getAShoppingCart = getRouteFactory(
  constantMessageValue.a_shopping_cart_url,
  constantMessageValue.no_products,
  getShoppingCartsByShopper,
);

export const postShoppingCart = postRouteFactory(
  constantMessageValue.shopping_cart,
  constantMessageValue.all_shopping_carts_url,
  createShoppingCart,
);
