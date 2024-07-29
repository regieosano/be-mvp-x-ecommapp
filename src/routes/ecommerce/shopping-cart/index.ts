import mS from "@src/messages/constants/shopping-cart";
import { getRouteFactory } from "@src/utilities/routes_factory/get";
import { postRouteFactory } from "@src/utilities/routes_factory/post";
import { createShoppingCart } from "@src/services/controllers/ecommerce/shopping-cart";
import { getShoppingCarts } from "@src/services/controllers/ecommerce/shopping-cart/actions/queries";

export const getAllShoppingCarts = getRouteFactory(
  mS.shopping_cart_url,
  mS.no_products,
  getShoppingCarts,
);

export const postShoppingCart = postRouteFactory(
  mS.shopping_cart,
  mS.shopping_cart_url,
  createShoppingCart,
);
