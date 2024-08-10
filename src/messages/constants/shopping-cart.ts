const m = (function () {
  // Shopping Cart Messages
  const INFO = 0;
  const NO_PRODUCTS = 500;
  const SHOPPER_MODEL = "User";
  const PRODUCTS_MODEL = "Product";
  const SHOPPING_CART = "shopping-cart";
  const SHOPPER_PATH_POPULATE = "shopper";
  const PRODUCTS_PATH_POPULATE = "products";
  const A_SHOPPING_CART_URL = "/shopping-cart";
  const ALL_SHOPPING_CARTS_URL = "/shopping-carts";
  const SHOPPER_FIELD_SELECTION = "-_id name address";
  const NEW_SHOPPING_CART_CREATED = "A new shopping cart created";
  const SHOPPING_USER_ID_DOES_NOT_EXIST = "Shopper does not exist";
  const PRODUCTS_FIELD_SELECTION = "_id name category description price qty";

  return (function () {
    return {
      info: INFO,
      no_products: NO_PRODUCTS,
      shopper_model: SHOPPER_MODEL,
      shopping_cart: SHOPPING_CART,
      products_model: PRODUCTS_MODEL,
      a_shopping_cart_url: A_SHOPPING_CART_URL,
      shopper_path_populate: SHOPPER_PATH_POPULATE,
      products_path_populate: PRODUCTS_PATH_POPULATE,
      all_shopping_carts_url: ALL_SHOPPING_CARTS_URL,
      shopper_field_selection: SHOPPER_FIELD_SELECTION,
      products_field_selection: PRODUCTS_FIELD_SELECTION,
      new_shopping_cart_created: NEW_SHOPPING_CART_CREATED,
      shopping_user_id_does_not_exist: SHOPPING_USER_ID_DOES_NOT_EXIST,
    };
  })();
})();

export default m;
