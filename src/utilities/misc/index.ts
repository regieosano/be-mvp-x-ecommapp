import mongoose from "mongoose";
import { User, Product } from "@src/types";

export const checkJSONBody = (bodyData: object) => {
  return JSON.parse(JSON.stringify(bodyData));
};

export const returnCheckMessage = (message: string) => {
  throw message;
};

export const findEntity: Function = async (
  objectModel: mongoose.Model<object>,
  fieldKeyObject: Object,
): Promise<Object | null> => {
  try {
    const entity = await objectModel.findOne(fieldKeyObject);

    return entity;
  } catch (error: unknown) {
    throw `${error}`;
  }
};

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
