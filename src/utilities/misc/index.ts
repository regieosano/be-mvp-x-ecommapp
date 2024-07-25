import { m } from "@src/values/constants";
import { User, Product } from "@src/types";

export const transformToNumber = (value?: string) => {
  return Number(value);
};

export const checkJSONBodyData = (bodyData: object) => {
  return JSON.parse(JSON.stringify(bodyData));
};

export default function reverseBooleanValue(booleanValue: unknown) {
  return booleanValue ? false : true;
}

export const compareValues = (
  itemToBeCheck: string | number,
  itemCheckAgaints: Array<string | number>,
) => {
  return itemCheckAgaints.includes(itemToBeCheck);
};

export const otpIsStillValid = (dateValueOne: number, dateValueTwo: number) => {
  return dateValueOne < dateValueTwo;
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
    const validatedDataObject = await validateData();

    const validationErrorMessage = validatedDataObject;
    reverseBooleanValue(validatedDataObject)
      ? returnCheckMessage(validationErrorMessage)
      : m.null;

    return validatedDataObject;
  } catch (error: unknown) {
    throw `${error}`;
  }
};
