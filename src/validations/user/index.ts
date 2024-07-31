import { User } from "@src/types";
import { validateUserBodyData } from "@src/validations/helper/userValidation";

export const userValidation = function (userBodyData: User) {
  const userBodyDataForChecking = Object.assign(
    {},
    Object.freeze(userBodyData),
  );

  return async function () {
    const { name, address, dob, email, cellNumber, gender, password } =
      userBodyDataForChecking;

    try {
      const result = await validateUserBodyData().validateAsync({
        name,
        address,
        dob,
        email,
        cellNumber,
        gender,
        password,
      });

      return result;
    } catch (error: unknown) {
      throw `${error}`;
    }
  };
};
