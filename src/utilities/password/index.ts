import bcrypt from "bcrypt";
import { SALT_VALUE, PASSWORD_HASH_MESSAGE } from "@src/values/constants";

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
    const result = await bcrypt.compare(userPassword, storedPassword);
    return result;
  } catch {
    throw new Error("Comparing password error - Mismatched");
  }
};
