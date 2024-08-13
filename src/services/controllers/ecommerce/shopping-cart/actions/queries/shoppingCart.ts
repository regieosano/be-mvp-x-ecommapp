import {
  entity,
  isEntityFound,
  storeSameValue,
  isEntityNotFound,
} from "@src/functions";
import { ShoppingEntity } from "@src/types";
import { UserModel } from "@src/models/user";
import mU from "@src/messages/constants/user";
import { findEntity } from "@src/utilities/misc/find";
import mS from "@src/messages/constants/shopping-cart";
import { returnCheckMessage } from "@src/utilities/misc/check";
import { shoppingFindCartsDeclaration } from "@src/utilities/ecommerce/shopping-cart";

export const getShoppingCartsByShopper: Function = async (
  noOfShoppingCarts: number,
  _id: string,
): Promise<ShoppingEntity> => {
  const shopper = await findEntity(UserModel, {
    _id,
  });

  isEntityFound(shopper)
    ? storeSameValue(shopper)
    : returnCheckMessage(mU.user_does_not_exist);

  const shoppingCartArray = await shoppingFindCartsDeclaration(
    noOfShoppingCarts,
    _id,
  );

  const getTheShopper = entity(mS.info);

  const shopperCart = isEntityNotFound(shoppingCartArray)
    ? []
    : getTheShopper(shoppingCartArray);

  return shopperCart;
};
