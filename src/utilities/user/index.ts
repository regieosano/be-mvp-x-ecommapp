import { UserModel } from "@src/models/user";

export const findAUserAndUpdateFields: Function = async (
  id: string,
  objectFieldsToUpdate: {},
): Promise<{} | null> => {
  try {
    await UserModel.findOneAndUpdate(
      { id },
      {
        $set: objectFieldsToUpdate,
      },
    );
    return { message: objectFieldsToUpdate };
  } catch (error: unknown) {
    throw `${error}`;
  }
};
