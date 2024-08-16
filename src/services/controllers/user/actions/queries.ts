import { UserList } from "@src/types";
import { UserModel } from "@src/models/user";
import constantValue from "@src/constants/stringnummisc";
import { readAllObjects } from "@src/utilities/crudFactory/read";

export const getVerifiedUsers: Function = async (
  noOfUsers: number,
): Promise<UserList> => {
  try {
    const users: UserList = await readAllObjects(() =>
      UserModel.find({ isVerified: constantValue.no }).limit(noOfUsers),
    );

    return users;
  } catch (error: unknown) {
    throw `${error}`;
  }
};
