import _ from "lodash";
import { User, PostObject } from "@src/types";
import { UserModel } from "@src/models/user";
import mU from "@src/messages/constants/user";
import mO from "@src/messages/constants/others";
import mH from "@src/messages/constants/http";
import { returnCheckMessage } from "@src/utilities/misc";
import { findAUserByIdOrEmail } from "@src/utilities/user";
import { createNewUserObject } from "@src/utilities/user/crud";

export const createUser: Function = async (user: User): Promise<PostObject> => {
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
