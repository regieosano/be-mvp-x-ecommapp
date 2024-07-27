import Joi from "joi";
import _ from "lodash";
import { User } from "@src/types";
import mV from "@src/messages/constants/validation";
import mO from "@src/messages/constants/others";

export const userValidation = function (userBodyData: User) {
  const userBodyDataForChecking = _.assign({}, Object.freeze(userBodyData));

  function validateUserBodyData() {
    return Joi.object({
      name: Joi.string().min(mV.min_string).max(mV.max_string).required(),
      address: Joi.string().min(mV.min_string).max(mV.max_string).optional(),
      dob: Joi.date().optional(),
      email: Joi.string()
        .email({ tlds: { allow: mO.no } })
        .required(),
      cellNumber: Joi.string()
        .min(mV.min_cell_num)
        .max(mV.max_cell_num)
        .optional(),
      gender: Joi.string().min(mV.min_gender).max(mV.max_gender).optional(),
      password: Joi.string()
        .min(mV.min_password)
        .max(mV.max_password)
        .optional(),
    });
  }

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
