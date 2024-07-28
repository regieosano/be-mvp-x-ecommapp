import bcrypt from "bcrypt";
import mP from "src/messages/constants/password";

export const encryptPassword = async (userPassword: string) => {
  let hashedPassword = "";

  try {
    hashedPassword = await bcrypt.hash(userPassword, mP.salt_value);

    return hashedPassword;
  } catch {
    throw `${mP.password_hash_message}`;
  }
};

export const decryptPassword = async (
  userPassword: string,
  storedPassword: string,
) => {
  try {
    const decryptedPassword = await bcrypt.compare(
      userPassword,
      storedPassword,
    );
    return decryptedPassword;
  } catch {
    throw mP.decryption_hash_message;
  }
};
