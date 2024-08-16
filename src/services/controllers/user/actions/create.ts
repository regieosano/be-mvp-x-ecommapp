import { User, Response } from "@src/types";
import { UserModel } from "@src/models/user";
import { findEntity } from "@src/utilities/misc/find";
import { encryptPassword } from "@src/utilities/password";
import { generateOTPAndExpiry } from "@src/utilities/otp";
import { returnCheckMessage } from "@src/utilities/misc/check";
import { isEntityFound, storeSameValue } from "@src/functions";
import { createObject } from "@src/utilities/crudFactory/create";
import constantMessageValue from "@src/constants/stringnummisc";

export const createUser: Function = async (user: User): Promise<Response> => {
  const userCandidate = Object.assign({}, Object.freeze(user));
  const { email } = userCandidate;

  const userToFind: User = await findEntity(UserModel, { email });

  const userAsNew = isEntityFound(userToFind)
    ? returnCheckMessage(constantMessageValue.user_message_exist_on_email)
    : storeSameValue(userCandidate);

  const { generatedOTP, expiry } = generateOTPAndExpiry();

  const { password } = userAsNew;
  const encryptedPassword = await encryptPassword(password);

  const qualifiedNewUser: User = {
    ...userAsNew,
    password: encryptedPassword,
    otp: generatedOTP,
    expiresAt: expiry,
  };

  const newUser: User = await createObject(UserModel, qualifiedNewUser);

  const result: Response = {
    message: constantMessageValue.record_created_message,
    data: newUser,
    http: constantMessageValue.created,
  };

  return result;
};
