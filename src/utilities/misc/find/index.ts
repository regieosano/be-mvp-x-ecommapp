import { ModelObject, ObjArgsType } from "@src/types";
import { isExisting, storeValueOf } from "@src/functions";

export const findEntity: Function = async (
  objectModel: ModelObject,
  fieldKeyObject: Object,
): Promise<Object> => {
  const objectReturned = await objectModel.findOne(fieldKeyObject);
  const entity = isExisting(objectReturned) ? {} : storeValueOf(objectReturned);

  return entity;
};

export const findEntityAndUpdateFields: Function = async (
  objArgs: ObjArgsType,
): Promise<Object> => {
  await objArgs.model.findOneAndUpdate(
    { _id: objArgs._id },
    {
      $set: objArgs.objectFields,
    },
  );

  const { objectFields } = objArgs;

  return { message: objectFields };
};
