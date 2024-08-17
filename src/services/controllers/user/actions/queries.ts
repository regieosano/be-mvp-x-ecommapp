import { UserList } from "@src/types";
import { UserModel } from "@src/models/user";
import constantMessageValue from "@src/constants/stringnummisc";
import { readAllObjects } from "@src/utilities/crudFactory/read";

export const getVerifiedUsers: Function = async (
  noOfUsers: number,
): Promise<UserList> => {
  const users: UserList = await readAllObjects(() =>
    UserModel.find({ isVerified: constantMessageValue.no }).limit(noOfUsers),
  );

  return users;
};
