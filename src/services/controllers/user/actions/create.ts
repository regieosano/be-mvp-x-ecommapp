import { User, Response } from "@src/types";
import { UserModel } from "@src/models/user";
import mH from "@src/messages/constants/http";
import mU from "@src/messages/constants/user";
import mO from "@src/messages/constants/others";
import { findEntity } from "@src/utilities/misc";
import { returnCheckMessage } from "@src/utilities/misc";
import { encryptPassword } from "@src/utilities/password";
import { generateOTPAndExpiry } from "@src/utilities/otp";
import { createObject } from "@src/utilities/crudFactory/create";

export const createUser: Function = async (user: User): Promise<Response> => {
  try {
    const userAsNew = Object.assign({}, Object.freeze(user));
    const { email } = userAsNew;

    const _user: User = await findEntity(UserModel, { email });

    _user ? returnCheckMessage(mU.user_message_exist_on_email) : mO.null;

    const { generatedOTP, expiry } = generateOTPAndExpiry();

    let encryptedPassword;

    const { password } = userAsNew;
    encryptedPassword = await encryptPassword(password);

    const qualifiedNewUser: User = {
      ...userAsNew,
      password: encryptedPassword,
      otp: generatedOTP,
      expiresAt: expiry,
    };

    const newUser: User = await createObject(UserModel, qualifiedNewUser);

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
