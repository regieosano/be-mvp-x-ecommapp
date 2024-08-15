import { UserList } from "@src/types";
import { UserModel } from "@src/models/user";
import messageValue from "@src/messages/messagevalues";
import { readAllObjects } from "@src/utilities/crudFactory/read";

export const getVerifiedUsers: Function = async (
  noOfUsers: number,
): Promise<UserList> => {
  try {
    const users: UserList = await readAllObjects(() =>
      UserModel.find({ isVerified: messageValue.no }).limit(noOfUsers),
    );

    return users;
  } catch (error: unknown) {
    throw `${error}`;
  }
};
