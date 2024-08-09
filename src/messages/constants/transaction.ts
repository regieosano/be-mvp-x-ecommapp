const m = (function () {
  // Transaction Messages
  const NO_TRANSACTIONS = 500;
  const TRANSACTION_URL = "/transactions";

  return (function () {
    return {
      no_transactions: NO_TRANSACTIONS,
      transaction_url: TRANSACTION_URL,
    };
  })();
})();

export default m;
