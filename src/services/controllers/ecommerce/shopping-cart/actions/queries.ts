import { UserModel } from "@src/models/user";
import mU from "@src/messages/constants/user";
import { nth, identity, isEmpty } from "ramda";
import mS from "@src/messages/constants/shopping-cart";
import { findEntity } from "@src/utilities/misc/find";
import { ShoppingEntity, ShoppingCartList } from "@src/types";
import { returnCheckMessage } from "@src/utilities/misc/check";
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
    const shopper = await findEntity(UserModel, {
      _id,
    });

    shopper ? identity(shopper) : returnCheckMessage(mU.user_does_not_exist);

    const shoppingCartArray = await shoppingFindCartsDeclaration(
      noOfShoppingCarts,
      _id,
    );

    const getTheShopper = nth(mS.info);

    const shopperCart = isEmpty(shoppingCartArray)
      ? []
      : getTheShopper(shoppingCartArray);

    return shopperCart;
  } catch (error: unknown) {
    throw `${error}`;
  }
};
