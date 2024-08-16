import { User } from "@src/types";
import { UserModel } from "@src/models/user";
import { findEntity } from "@src/utilities/misc/find";
import constantMessageValue from "@src/constants/stringnummisc";
import { isUserValidCheck } from "@src/utilities/user/lib";
import { findEntityAndUpdateFields } from "@src/utilities/misc/find";

export const authenticateUser = async (objectData: {
  _id: string;
  otpInput: string;
}) => {
  const { _id, otpInput } = Object.assign({}, Object.freeze(objectData));

  const userToBeAuthenticated: User = await findEntity(UserModel, {
    _id,
  });

  isUserValidCheck(userToBeAuthenticated, otpInput);

  const { message } = await findEntityAndUpdateFields({
    _id,
    model: UserModel,
    objectFields: {
      isVerified: constantMessageValue.yes,
    },
  });

  return {
    message: constantMessageValue.otp_successfully_verified,
    data: { user: message },
    http: constantMessageValue.ok,
  };
};
