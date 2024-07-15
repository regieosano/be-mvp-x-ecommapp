import Joi from "joi";
import { User } from "@src/types";

export const userValidation = function (userBodyData: User) {
  const userBodyDataForChecking = { ...userBodyData };

  function validateUserBodyData() {
    return Joi.object({
      name: Joi.string().min(2).max(255).required(),
      address: Joi.string().min(2).max(255).optional(),
      dob: Joi.date().optional(),
      email: Joi.string()
        .email({ tlds: { allow: false } })
        .required(),
      cellNumber: Joi.string().min(0).max(25).optional(),
      gender: Joi.string().min(0).max(25).optional(),
      password: Joi.string().min(8).max(25).optional(),
      isVerified: Joi.boolean().optional(),
      otp: Joi.string().min(0).max(6).optional(),
      expiresAt: Joi.number().optional(),
    });
  }

  return async function () {
    const {
      name,
      address,
      dob,
      email,
      cellNumber,
      gender,
      password,
      isVerified,
      otp,
      expiresAt,
    } = userBodyDataForChecking;

    try {
      await validateUserBodyData().validateAsync({
        name,
        address,
        dob,
        email,
        cellNumber,
        gender,
        password,
        isVerified,
        otp,
        expiresAt,
      });
    } catch (error: any) {
      const details = error["details"][0].message;
      const errorObject = { error: details };
      return errorObject;
    }
  };
};
