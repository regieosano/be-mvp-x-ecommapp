import { User } from "@src/types";
import { m } from "@src/values/constants";
import { UserModel } from "@src/models/user";

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
