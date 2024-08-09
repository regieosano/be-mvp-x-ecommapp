import { getUsers, postUser } from "@src/routes/user";
import { postResendOTP } from "@src/routes/resend-otp";
import { postSendOTPEmail } from "@src/routes/sendemail";
import { postAuthUser } from "@src/routes/authentication";
import {
  getAShoppingCart,
  getAllShoppingCarts,
  postShoppingCart,
} from "@src/routes/ecommerce/shopping-cart";
import { getTransactionData } from "@src/routes/transaction";
import { getProducts, postProduct } from "@src/routes/ecommerce/product";

export const routesArray = [
  getUsers,
  getProducts,
  getAShoppingCart,
  getTransactionData,
  getAllShoppingCarts,

  postUser,
  postProduct,
  postAuthUser,
  postResendOTP,
  postSendOTPEmail,
  postShoppingCart,
];
