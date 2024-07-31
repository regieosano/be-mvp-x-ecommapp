import mongoose from "mongoose";
import { ModelObject } from "@src/types";

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
