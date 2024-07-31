import { head } from "ramda";
import { ShoppingEntity, ShoppingCartList } from "@src/types";
import { shoppingFindCartsDeclaration } from "@src/utilities/ecommerce/shopping-cart";

export const getShoppingCarts: Function = async (
  noOfShoppingCarts: number,
  _id: undefined,
): Promise<ShoppingCartList> => {
  try {
    const shoppingCarts: ShoppingCartList = await shoppingFindCartsDeclaration(
      noOfShoppingCarts,
      _id,
    );

    return shoppingCarts;
  } catch (error: unknown) {
    throw `${error}`;
  }
};

export const getShoppingCartsByShopper: Function = async (
  noOfShoppingCarts: number,
  _id: string,
): Promise<ShoppingEntity> => {
  try {
    const shoppingCartArray = await shoppingFindCartsDeclaration(
      noOfShoppingCarts,
      _id,
    );

    const shopperCart = head(shoppingCartArray);

    return shopperCart;
  } catch (error: unknown) {
    throw `${error}`;
  }
};
