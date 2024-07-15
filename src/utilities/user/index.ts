import { UserModel } from "@src/models/user";

import { User } from "@src/types";

export const findAUser: Function = async (
  userId: string,
): Promise<User | null> => {
  try {
    const user = await UserModel.findOne({
      id: userId,
    });

    if (user) {
      return user;
    } else {
      return null;
    }
  } catch (error: unknown) {
    throw `${error}`;
  }
};
