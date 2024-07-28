import { User } from "@src/types";
import { UserModel } from "@src/models/user";
import mH from "@src/messages/constants/http";
import mU from "@src/messages/constants/user";
import mO from "@src/messages/constants/others";
import { returnCheckMessage } from "@src/utilities/misc";
import { findEntity } from "@src/utilities/misc";
import { createNewUserObject } from "@src/utilities/user/crud";

export const createUser: Function = async (user: User): Promise<Object> => {
  try {
    const userAsNew = Object.assign({}, Object.freeze(user));
    const { email } = userAsNew;

    // email existing?
    const _user: User = await findEntity(UserModel, { email });

    _user ? returnCheckMessage(mU.user_message_exist_on_email) : mO.null;

    // New user created and persisted
    const newUser: User = await createNewUserObject(userAsNew);
    await new UserModel(newUser).save();

    const result = {
      message: mU.record_created_message,
      data: newUser,
      http: mH.created,
    };

    return result;
  } catch (error: unknown) {
    throw `${error}`;
  }
};
