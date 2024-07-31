import { User } from "@src/types";
import { UserModel } from "@src/models/user";
import mC from "@src/messages/constants/otp";
import mH from "@src/messages/constants/http";
import mO from "@src/messages/constants/others";
import { findEntity } from "@src/utilities/misc/find";
import { isUserValidCheck } from "@src/utilities/user/lib";
import { findEntityAndUpdateFields } from "@src/utilities/misc/find";

export const authenticateUser = async (objectData: {
  _id: string;
  otpInput: string;
}) => {
  try {
    const { _id, otpInput } = Object.assign({}, Object.freeze(objectData));

    const userToBeAuthenticated: User = await findEntity(UserModel, {
      _id,
    });

    isUserValidCheck(userToBeAuthenticated, otpInput);

    const { message } = await findEntityAndUpdateFields(
      _id,
      {
        isVerified: mO.yes,
      },
      UserModel,
    );

    return {
      message: mC.otp_successfully_verified,
      data: { user: message },
      http: mH.ok,
    };
  } catch (error: unknown) {
    throw `${error}`;
  }
};
