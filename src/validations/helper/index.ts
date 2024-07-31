import { User, Product } from "@src/types";

export const newInputValidationData: Function = async (
  infoData: User | Product,
  joiValidationFn: Function,
): Promise<User | Error> => {
  try {
    const validateData = joiValidationFn(infoData);

    return await validateData();
  } catch (error: unknown) {
    throw `${error}`;
  }
};
