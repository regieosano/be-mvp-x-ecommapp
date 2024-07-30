import { ModelObject, ObjectList } from "@src/types";

export const readAllObjects: Function = async (
  noOfRecords: number,
  modelObject: ModelObject,
): Promise<ObjectList> => {
  try {
    const records: ObjectList = await modelObject.find().limit(noOfRecords);

    return records;
  } catch (error: unknown) {
    throw `${error}`;
  }
};
