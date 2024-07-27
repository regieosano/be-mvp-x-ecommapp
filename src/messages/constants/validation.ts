const m = (function () {
  // Validation Messages and Values
  const MIN_STRING = 2;
  const MAX_STRING = 255;
  const MIN_CELL_NUM = 8;
  const MAX_CELL_NUM = 25;
  const MIN_PASSWORD = 8;
  const MAX_PASSWORD = 25;
  const MAX_GENDER = 20;
  const MIN_GENDER = 1;
  const MIN_QTY = 0;
  const MIN_OTP = 6;
  const MAX_OTP = 6;
  const MAX_PRICE = 1000000;
  const MIN_PRICE = 1;
  const MAX_QTY = 500000;
  const V_USER = "user";
  const V_PRODUCT = "product";
  const V_OTP = "otp";
  const V_EMAIL = "email";
  const V_RESEND_OTP = "resend-otp";

  return (function () {
    return {
      min_string: MIN_STRING,
      max_string: MAX_STRING,
      min_qty: MIN_QTY,
      min_price: MIN_PRICE,
      max_cell_num: MAX_CELL_NUM,
      min_cell_num: MIN_CELL_NUM,
      max_password: MAX_PASSWORD,
      min_password: MIN_PASSWORD,
      min_gender: MIN_GENDER,
      max_gender: MAX_GENDER,
      max_price: MAX_PRICE,
      min_otp: MIN_OTP,
      max_otp: MAX_OTP,
      max_qty: MAX_QTY,
      user: V_USER,
      product: V_PRODUCT,
      otp: V_OTP,
      email: V_EMAIL,
      resend_otp: V_RESEND_OTP,
    };
  })();
})();

export default m;
