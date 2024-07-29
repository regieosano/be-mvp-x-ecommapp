const m = (function () {
  // Validation Messages and Values
  const MIN_QTY = 0;
  const MIN_OTP = 6;
  const MAX_OTP = 6;
  const V_OTP = "otp";
  const MIN_PRICE = 1;
  const V_USER = "user";
  const MIN_GENDER = 1;
  const MIN_STRING = 20;
  const MAX_GENDER = 20;
  const MAX_STRING = 255;
  const V_EMAIL = "email";
  const MAX_QTY = 500000;
  const MIN_PASSWORD = 8;
  const MIN_CELL_NUM = 8;
  const MAX_CELL_NUM = 25;
  const MAX_PASSWORD = 25;
  const MAX_PRICE = 1000000;
  const V_PRODUCT = "product";
  const V_RESEND_OTP = "resend-otp";
  const V_SHOPPING_CART = "shopping-cart";

  return (function () {
    return {
      otp: V_OTP,
      user: V_USER,
      email: V_EMAIL,
      min_otp: MIN_OTP,
      max_otp: MAX_OTP,
      max_qty: MAX_QTY,
      min_qty: MIN_QTY,
      product: V_PRODUCT,
      min_price: MIN_PRICE,
      max_price: MAX_PRICE,
      min_string: MIN_STRING,
      max_string: MAX_STRING,
      min_gender: MIN_GENDER,
      max_gender: MAX_GENDER,
      resend_otp: V_RESEND_OTP,
      max_cell_num: MAX_CELL_NUM,
      min_cell_num: MIN_CELL_NUM,
      max_password: MAX_PASSWORD,
      min_password: MIN_PASSWORD,
      shopping_cart: V_SHOPPING_CART,
    };
  })();
})();

export default m;
