import { UserModel } from "@src/models/user";
import { findEntity } from "@src/utilities/misc/find";
import { User, Response, ShoppingCart } from "@src/types";
import { isEntityNotFound, storeValueOf } from "@src/functions";
import { ShoppingCartModel } from "@src/models/shopping-cart";
import constantMessageValue from "@src/constants/stringnummisc";
import { createObject } from "@src/utilities/crudFactory/create";
import { returnResultAsChecked } from "@src/utilities/misc/check";

export const createShoppingCart: Function = async (
  shoppingCart: ShoppingCart,
): Promise<Response> => {
  let result: Response;
  const _shoppingCart = Object.assign({}, Object.freeze(shoppingCart));

  if (
    isEntityNotFound(
      await findEntity(UserModel, { _id: _shoppingCart.shopper }),
    )
  ) {
    result = returnResultAsChecked(
      _shoppingCart,
      constantMessageValue.shopping_user_id_does_not_exist,
    );
  } else {
    const newShoppingCart: ShoppingCart = await createObject(
      ShoppingCartModel,
      _shoppingCart,
    );

    result = {
      message: constantMessageValue.new_shopping_cart_created,
      data: newShoppingCart,
      http: constantMessageValue.created,
    };
  }

  return result;
};
