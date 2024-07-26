import _ from "lodash";
import { User } from "@src/types";
import { UserModel } from "@src/models/user";
import mU from "@src/messages/constants/user";
import mO from "@src/messages/constants/others";
import { findAUserByIdOrEmail } from "@src/utilities/user";
import { returnCheckMessage } from "@src/utilities/misc";
import { createNewUserObject } from "@src/utilities/user/crud";

export const createUser: Function = async (user: User): Promise<User> => {
  try {
    const userAsNew = _.assign({}, Object.freeze(user));
    const { email } = userAsNew;

    // Is email already existing?
    const _user = await findAUserByIdOrEmail({
      email,
    });
    _user ? returnCheckMessage(mU.user_message_exist_on_email) : mO.null;

    // New user created and persisted
    const newUser: User = await createNewUserObject(userAsNew);
    await new UserModel(newUser).save();

    return newUser;
  } catch (error: unknown) {
    throw `${error}`;
  }
};
