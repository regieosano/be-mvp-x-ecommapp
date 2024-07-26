import { User } from "@src/types";
import mO from "src/messages/constants/others";
import { generateOTPAndExpiry } from "@src/utilities/otp";
import { findAUserAndUpdateFields } from "@src/utilities/user";
import { createInstanceEmailBodyAndSendMail } from "@src/utilities/email";

export const sendResetOTPEmail: Function = async (user: User) => {
  try {
    // OTP Generation Only
    const { generatedOTP, expiry } = generateOTPAndExpiry();
    // Store New OTP Code and Expiry for User
    await findAUserAndUpdateFields(user.id, {
      otp: generatedOTP,
      expiresAt: expiry,
    });
    // Send OTP Verification Email
    const { email } = user;
    await createInstanceEmailBodyAndSendMail(email, generatedOTP);
    // Set ResendCode to False
    await findAUserAndUpdateFields(user.id, { isResendCode: mO.no });
  } catch (error: unknown) {
    throw `${error}`;
  }
};
