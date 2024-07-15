import bcrypt from "bcrypt";
import { constantValuesForMessages } from "@src/values/constants";

export const encryptPassword = async (userPassword: string) => {
  const getConstantValuesMessages = constantValuesForMessages();
  const m = getConstantValuesMessages();
  let hashedPassword = "";

  try {
    hashedPassword = await bcrypt.hash(userPassword, m.salt_value);

    return hashedPassword;
  } catch {
    throw new Error(`${m.password_hash_message}`);
  }
};

export const decryptPassword = async (
  userPassword: string,
  storedPassword: string,
) => {
  const getConstantValuesMessages = constantValuesForMessages();
  const m = getConstantValuesMessages();
  try {
    const decryptedPassword = await bcrypt.compare(
      userPassword,
      storedPassword,
    );
    return decryptedPassword;
  } catch {
    throw new Error(m.decryption_hash_message);
  }
};
