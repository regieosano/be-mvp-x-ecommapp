import { UserList } from "@src/types";
import { UserModel } from "@src/models/user";
import { readAllObjects } from "@src/utilities/crudFactory/read";

export const getVerifiedUsers: Function = async (
  noOfUsers: number,
): Promise<UserList> => {
  try {
    const users: UserList = readAllObjects(noOfUsers, UserModel);

    return users;
  } catch (error: unknown) {
    throw `${error}`;
  }
};
