import bcrypt from "bcrypt";
import {
  SALT_VALUE,
  PASSWORD_HASH_MESSAGE,
  DECRYPTION_HASH_MESSAGE,
} from "@src/values/constants";

export const encryptPassword = async (userPassword: string) => {
  let hashedPassword = "";

  try {
    hashedPassword = await bcrypt.hash(userPassword, SALT_VALUE);

    return hashedPassword;
  } catch {
    throw new Error(`${PASSWORD_HASH_MESSAGE}`);
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
    throw new Error(DECRYPTION_HASH_MESSAGE);
  }
};
