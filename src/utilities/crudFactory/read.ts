import { ObjectList } from "@src/types";

export const readAllObjects: Function = async (
  findFunc: Function,
): Promise<ObjectList> => {
  try {
    const records: ObjectList = await findFunc();

    return records;
  } catch (error: unknown) {
    throw `${error}`;
  }
};
