import { v4 as uuidv4 } from "uuid";
import {
  INTERNAL_SERVER_MESSAGE,
  EMAIL_MESSAGE_EXIST,
} from "@src/values/constants";
import { UserModel } from "@src/models/user";
import { User } from "@src/types";
import { encryptPassword } from "@src/utilities/password";

const TEST_TRUE = true;

export const createUser = async (user: User) => {
  try {
    const candidateUser = Object.assign({}, user);

    const userEmail = await UserModel.find({ email: user.email });

    if (!userEmail) {
      throw new Error(EMAIL_MESSAGE_EXIST);
    }

    // TODO: Email thru OTP Verification

    if (TEST_TRUE) {
      const newUserId = uuidv4();

      candidateUser.id = newUserId;
      try {
        candidateUser.password = await encryptPassword(candidateUser.password);
      } catch (error: unknown) {
        throw `${error}`;
      }

      await new UserModel(candidateUser).save();
    }
  } catch (error: unknown) {
    throw `${error}`;
  }
};
