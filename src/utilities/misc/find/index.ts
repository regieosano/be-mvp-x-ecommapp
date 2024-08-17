import { isExisting, storeValueOf } from "@src/functions";
import { ModelObject, ObjArgsType } from "@src/types";

export const findEntity: Function = async (
  objectModel: ModelObject,
  fieldKeyObject: Object,
): Promise<Object> => {
  try {
    const objectReturned = await objectModel.findOne(fieldKeyObject);
    const entity = isExisting(objectReturned)
      ? {}
      : storeValueOf(objectReturned);

    return entity;
  } catch (error: unknown) {
    throw `${error}`;
  }
};

export const findEntityAndUpdateFields: Function = async (
  objArgs: ObjArgsType,
): Promise<Object> => {
  try {
    await objArgs.model.findOneAndUpdate(
      { _id: objArgs._id },
      {
        $set: objArgs.objectFields,
      },
    );

    const { objectFields } = objArgs;

    return { message: objectFields };
  } catch (error: unknown) {
    throw `${error}`;
  }
};
