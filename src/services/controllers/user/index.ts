import _ from "lodash";
import { m } from "@src/values/constants";
import { findAUserByIdOrEmail } from "@src/utilities/user";
import { returnCheckMessage } from "@src/utilities/misc";
import { UserModel } from "@src/models/user";
import { User } from "@src/types";
import { createNewUserObject } from "@src/utilities/user/crud";

export const getVerifiedUsers: Function = async (
  noOfUsers: number,
): Promise<User[] | null> => {
  try {
    // Get all "verified" users
    const verifiedUsers = await UserModel.find({
      isVerified: m.yes,
    })
      .select(m.user_properties)
      .limit(noOfUsers);
    return verifiedUsers;
  } catch (error: unknown) {
    throw `${error}`;
  }
};

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
