import { User, Product } from "@src/types";

export const checkJSONBody = (bodyData: object) => {
  return JSON.parse(JSON.stringify(bodyData));
};

export const returnCheckMessage = (message: string) => {
  throw message;
};

export const newInputValidationData: Function = async (
  infoData: User | Product,
  joiValidationFn: Function,
): Promise<User | Error> => {
  try {
    const validateData = joiValidationFn(infoData);
    return await validateData();
  } catch (error: unknown) {
    console.log(error);
    throw `${error}`;
  }
};
