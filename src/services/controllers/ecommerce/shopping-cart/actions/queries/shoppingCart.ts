import { ShoppingEntity } from "@src/types";
import { UserModel } from "@src/models/user";
import { findEntity } from "@src/utilities/misc/find";
import { entity, isEntityNotFound } from "@src/functions";
import constantMessageValue from "@src/constants/stringnummisc";
import { returnResultAsChecked } from "@src/utilities/misc/check";
import { shoppingFindCartsDeclaration } from "@src/utilities/ecommerce/shopping-cart";

export const getShoppingCartsByShopper: Function = async (
  noOfShoppingCarts: number,
  _id: string,
): Promise<ShoppingEntity> => {
  const shopper = await findEntity(UserModel, {
    _id,
  });

  if (isEntityNotFound(shopper)) {
    returnResultAsChecked(shopper, constantMessageValue.user_does_not_exist);
  }

  const shoppingCartArray = await shoppingFindCartsDeclaration(
    noOfShoppingCarts,
    _id,
  );

  const getTheShopper = entity(constantMessageValue.info);

  const shopperCart = isEntityNotFound(shoppingCartArray)
    ? []
    : getTheShopper(shoppingCartArray);

  return shopperCart;
};
