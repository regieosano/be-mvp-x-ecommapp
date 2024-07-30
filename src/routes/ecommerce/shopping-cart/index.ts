import mS from "@src/messages/constants/shopping-cart";
import { getRouteFactory } from "@src/routes/_routesFactory/get";
import { postRouteFactory } from "@src/routes/_routesFactory/post";
import { createShoppingCart } from "@src/services/controllers/ecommerce/shopping-cart";
import {
  getShoppingCarts,
  getShoppingCartsByShopper,
} from "@src/services/controllers/ecommerce/shopping-cart/actions/queries";

export const getAllShoppingCarts = getRouteFactory(
  mS.all_shopping_carts_url,
  mS.no_products,
  getShoppingCarts,
);

export const getAShoppingCart = getRouteFactory(
  mS.a_shopping_cart_url,
  mS.no_products,
  getShoppingCartsByShopper,
);

export const postShoppingCart = postRouteFactory(
  mS.shopping_cart,
  mS.all_shopping_carts_url,
  createShoppingCart,
);
