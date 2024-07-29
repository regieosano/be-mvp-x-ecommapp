import { UserModel } from "@src/models/user";
import mO from "@src/messages/constants/others";

export const setResendCodeToTrue: Function = async (_id: string) => {
  try {
    return await findAUserAndUpdateFields(_id, { isResendCode: mO.yes });
  } catch (error: unknown) {
    throw `${error}`;
  }
};

export const findAUserAndUpdateFields: Function = async (
  _id: string,
  objectFieldsToUpdate: {},
): Promise<{} | null> => {
  try {
    await UserModel.findOneAndUpdate(
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
