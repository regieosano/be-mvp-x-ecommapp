const m = (function () {
  // Password Messages
  const SALT_VALUE = 10;
  const PASSWORD_HASH_MESSAGE = "Password entered empty or not valid";
  const DECRYPTION_HASH_MESSAGE = "Error in decrypting hashed password";

  return (function () {
    return {
      salt_value: SALT_VALUE,
      password_hash_message: PASSWORD_HASH_MESSAGE,
      decryption_hash_message: DECRYPTION_HASH_MESSAGE,
    };
  })();
})();

export default m;
