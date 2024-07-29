import { ShoppingCart } from "@src/types";
import mS from "@src/messages/constants/shopping-cart";
import { ShoppingCartModel } from "@src/models/shopping-cart";

const populateShopperDeclarations = () => {
  return {
    path: mS.shopper_path_populate,
    select: mS.shopper_field_selection,
  };
};

const populateProductDeclarations = () => {
  return {
    path: mS.products_path_populate,
    select: mS.products_field_selection,
  };
};

export const getShoppingCarts: Function = async (
  noOfShoppingCarts: number,
): Promise<ShoppingCart[] | null> => {
  try {
    const shoppingCarts = await ShoppingCartModel.find()
      .populate(populateShopperDeclarations())
      .populate(populateProductDeclarations())
      .limit(noOfShoppingCarts);

    return shoppingCarts;
  } catch (error: unknown) {
    throw `${error}`;
  }
};

export const getShoppingCartsByShopper: Function = async (
  noOfShoppingCarts: number,
  _id: string,
): Promise<ShoppingCart[] | null> => {
  try {
    const shoppingCarts = await ShoppingCartModel.find({
      shopper: _id,
    })
      .populate(populateShopperDeclarations())
      .populate(populateProductDeclarations())
      .limit(noOfShoppingCarts);

    return shoppingCarts;
  } catch (error: unknown) {
    throw `${error}`;
  }
};
