import { ShoppingCart } from "@src/types";
import mS from "@src/messages/constants/shopping-cart";
import { ShoppingCartModel } from "@src/models/shopping-cart";

export const getShoppingCarts: Function = async (
  noOfShoppingCarts: number,
): Promise<ShoppingCart[] | null> => {
  try {
    // get all shopping carts
    const shoppingCarts = await ShoppingCartModel.find()
      .populate({
        path: mS.shopper_path_populate,
        model: mS.shopper_model,
        select: mS.shopper_field_selection,
      })
      .populate({
        path: mS.products_path_populate,
        model: mS.products_model,
        select: mS.products_field_selection,
      })
      .limit(noOfShoppingCarts);

    return shoppingCarts;
  } catch (error: unknown) {
    throw `${error}`;
  }
};
