import { userValidation } from "@src/validations/user_validations";
import { UserModel } from "@src/models/user";
import { KeySearchObject } from "@src/types";
import { User } from "@src/types";
import not from "@src/utilities/misc";

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
): Promise<any> => {
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

export const newUserInputValidationData: Function = async (
  userInfoData: User,
): Promise<User | Error> => {
  try {
    const validateUserData = userValidation(userInfoData);
    const validatedUserDataObject = await validateUserData();

    if (not(validatedUserDataObject)) {
      const message = validatedUserDataObject;
      throw message;
    }
    return validatedUserDataObject;
  } catch (error: unknown) {
    throw `${error}`;
  }
};
