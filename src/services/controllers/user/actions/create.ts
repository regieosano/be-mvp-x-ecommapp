import { User, Response } from "@src/types";
import { UserModel } from "@src/models/user";
import { isEntityFound } from "@src/functions";
import { findEntity } from "@src/utilities/misc/find";
import { encryptPassword } from "@src/utilities/password";
import { generateOTPAndExpiry } from "@src/utilities/otp";
import { returnCheckMessage } from "@src/utilities/misc/check";
import constantMessageValue from "@src/constants/stringnummisc";
import { createObject } from "@src/utilities/crudFactory/create";

export const createUser: Function = async (user: User): Promise<Response> => {
  let result: Response;
  const _user = Object.assign({}, Object.freeze(user));

  if (isEntityFound(await findEntity(UserModel, { email: _user.email }))) {
    result = returnCheckMessage(
      _user,
      constantMessageValue.user_message_exist_on_email,
    );
  } else {
    const { generatedOTP, expiry } = generateOTPAndExpiry();

    const { password } = _user;
    const encryptedPassword = await encryptPassword(password);

    const qualifiedNewUser: User = {
      ..._user,
      password: encryptedPassword,
      otp: generatedOTP,
      expiresAt: expiry,
    };

    const newUser: User = await createObject(UserModel, qualifiedNewUser);

    result = {
      message: constantMessageValue.new_user_created,
      data: newUser,
      http: constantMessageValue.created,
    };
  }

  return result;
};
