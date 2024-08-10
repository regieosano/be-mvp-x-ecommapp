import { identity } from "ramda";
import { UserModel } from "@src/models/user";
import mH from "@src/messages/constants/http";
import { findEntity } from "@src/utilities/misc/find";
import mS from "@src/messages/constants/shopping-cart";
import { User, Response, ShoppingCart } from "@src/types";
import { ShoppingCartModel } from "@src/models/shopping-cart";
import { returnCheckMessage } from "@src/utilities/misc/check";
import { createObject } from "@src/utilities/crudFactory/create";

export const createShoppingCart: Function = async (
  shoppingCart: ShoppingCart,
): Promise<Response> => {
  const shoppingCartAsNew = Object.assign({}, Object.freeze(shoppingCart));
  const { shopper } = shoppingCartAsNew;
  const _id = shopper;

  const _user: User = await findEntity(UserModel, {
    _id,
  });

  _user
    ? identity(_user)
    : returnCheckMessage(mS.shopping_user_id_does_not_exist);

  const newShoppingCart: ShoppingCart = await createObject(
    ShoppingCartModel,
    shoppingCartAsNew,
  );

  const result: Response = {
    message: mS.new_shopping_cart_created,
    data: newShoppingCart,
    http: mH.created,
  };

  return result;
};
