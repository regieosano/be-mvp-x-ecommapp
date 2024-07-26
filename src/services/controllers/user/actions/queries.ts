import { User } from "@src/types";
import { UserModel } from "@src/models/user";
import mH from "@src/messages/constants/http";
import mO from "@src/messages/constants/others";

export const getVerifiedUsers: Function = async (
  noOfUsers: number,
): Promise<User[] | null> => {
  try {
    // Get all "verified" users
    const verifiedUsers = await UserModel.find({
      isVerified: mO.yes,
    })
      .select(mH.user_properties)
      .limit(noOfUsers);
    return verifiedUsers;
  } catch (error: unknown) {
    throw `${error}`;
  }
};
