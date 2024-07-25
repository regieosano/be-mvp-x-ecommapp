import _ from "lodash";
import { User } from "@src/types";
import { UserModel } from "@src/models/user";
import { m } from "@src/values/constants";
import { findAUserByIdOrEmail } from "@src/utilities/user";
import { returnCheckMessage } from "@src/utilities/misc";
import { createNewUserObject } from "@src/utilities/user/crud";

export const createUser: Function = async (user: User): Promise<User> => {
  try {
    const userAsNew = _.assign({}, Object.freeze(user));
    const { email } = userAsNew;

    // Check if email already exist
    const _user = await findAUserByIdOrEmail({
      email,
    });
    _user ? returnCheckMessage(m.user_message_exist_on_email) : m.null;

    // New user is created and stored
    const newUser: User = await createNewUserObject(userAsNew);

    await new UserModel(newUser).save();

    // Return created new user
    return newUser;
  } catch (error: unknown) {
    throw `${error}`;
  }
};
