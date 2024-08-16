import bcrypt from "bcrypt";
import constantMessageValue from "@src/constants/stringnummisc";

export const encryptPassword = async (userPassword: string) => {
  try {
    const hashedPassword = await bcrypt.hash(
      userPassword,
      constantMessageValue.salt_value,
    );

    return hashedPassword;
  } catch {
    throw `${constantMessageValue.password_hash_message}`;
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
    throw constantMessageValue.decryption_hash_message;
  }
};
