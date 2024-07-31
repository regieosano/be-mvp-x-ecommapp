import mongoose from "mongoose";
import { ModelObject, User, Product } from "@src/types";

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

export const findEntityAndUpdateFields: Function = async (
  _id: string,
  modelObjectEntity: ModelObject,
  objectFieldsToUpdate: {},
): Promise<{} | null> => {
  try {
    await modelObjectEntity.findOneAndUpdate(
      { _id },
      {
        $set: objectFieldsToUpdate,
      },
    );

    return { message: objectFieldsToUpdate };
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
