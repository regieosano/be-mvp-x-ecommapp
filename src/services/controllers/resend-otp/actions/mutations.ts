import { m } from "@src/values/constants";
import { findAUserAndUpdateFields } from "@src/utilities/user";
import { createInstanceEmailBodyAndSendMail } from "@src/utilities/email";
import { generateOTPAndExpiry } from "@src/utilities/otp";
import { User } from "@src/types";

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
    await findAUserAndUpdateFields(user.id, { isResendCode: m.no });
  } catch (error: unknown) {
    throw `${error}`;
  }
};
