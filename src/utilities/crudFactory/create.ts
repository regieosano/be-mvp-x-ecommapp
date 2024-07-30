import { ModelObject } from "@src/types";

export const createObject: Function = async (
  modelObject: ModelObject,
  entityProperties: Object,
): Promise<Object> => {
  try {
    const newObject = {
      ...entityProperties,
    };

    await new modelObject(newObject).save();

    return newObject;
  } catch (error: unknown) {
    throw `${error}`;
  }
};
