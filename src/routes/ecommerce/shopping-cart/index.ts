import mS from "@src/messages/constants/shopping-cart";
import { postRouteFactory } from "@src/utilities/routes_factory/post";
import { createShoppingCart } from "@src/services/controllers/ecommerce/shopping-cart";

export const postShoppingCart = postRouteFactory(
  mS.shopping_cart,
  mS.shopping_cart_url,
  createShoppingCart,
);
