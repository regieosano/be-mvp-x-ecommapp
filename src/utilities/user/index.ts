import { UserModel } from "@src/models/user";
import { KeySearchObject } from "@src/types";
import { User } from "@src/types";

export const findAUserByIdOrEmail: Function = async (
  fieldKeyObject: KeySearchObject,
): Promise<User | null> => {
  try {
    const { id, email } = fieldKeyObject;
    const searchObjectField = id ? { id } : { email };
    const user = await UserModel.findOne(searchObjectField);

    return user;
  } catch (error: unknown) {
    throw `${error}`;
  }
};

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
