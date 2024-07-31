import { UserModel } from "@src/models/user";
import { findEntityAndUpdateFields } from "@src/utilities/misc";
import mO from "@src/messages/constants/others";

export const setUserResendCodeToTrue: Function = async (_id: string) => {
  try {
    return await findEntityAndUpdateFields(
      _id,
      { isResendCode: mO.yes },
      UserModel,
    );
  } catch (error: unknown) {
    throw `${error}`;
  }
};
