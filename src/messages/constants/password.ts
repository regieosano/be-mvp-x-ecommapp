const m = (function () {
  // Password Messages
  const PASSWORD_HASH_MESSAGE = "Password entered empty or not valid";
  const DECRYPTION_HASH_MESSAGE = "Error in decrypting hashed password";
  const SALT_VALUE = 10;

  return (function () {
    return {
      password_hash_message: PASSWORD_HASH_MESSAGE,
      decryption_hash_message: DECRYPTION_HASH_MESSAGE,
      salt_value: SALT_VALUE,
    };
  })();
})();

export default m;
