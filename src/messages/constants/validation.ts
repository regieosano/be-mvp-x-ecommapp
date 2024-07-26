const m = (function () {
  // Validation Messages and Values
  const MIN_STRING = 2;
  const MAX_STRING = 255;
  const MIN_QTY = 0;
  const MAX_PRICE = 1000000;
  const MIN_PRICE = 1;
  const MAX_QTY = 500000;

  return (function () {
    return {
      min_string: MIN_STRING,
      max_string: MAX_STRING,
      min_qty: MIN_QTY,
      min_price: MIN_PRICE,
      max_price: MAX_PRICE,
      max_qty: MAX_QTY,
    };
  })();
})();

export default m;
