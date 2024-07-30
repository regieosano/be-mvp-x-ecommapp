import { User, Response } from "@src/types";
import { UserModel } from "@src/models/user";
import mH from "@src/messages/constants/http";
import mU from "@src/messages/constants/user";
import mO from "@src/messages/constants/others";
import { findEntity } from "@src/utilities/misc";
import { returnCheckMessage } from "@src/utilities/misc";
import { createNewUserObject } from "@src/utilities/user/crud/create";

export const createUser: Function = async (user: User): Promise<Object> => {
  try {
    const userAsNew = Object.assign({}, Object.freeze(user));
    const { email } = userAsNew;

    // email existing?
    const _user: User = await findEntity(UserModel, { email });

    _user ? returnCheckMessage(mU.user_message_exist_on_email) : mO.null;

    // new user persisted
    const newUser: User = await createNewUserObject(userAsNew);
    await new UserModel(newUser).save();

    const result: Response = {
      message: mU.record_created_message,
      data: newUser,
      http: mH.created,
    };

    return result;
  } catch (error: unknown) {
    throw `${error}`;
  }
};
