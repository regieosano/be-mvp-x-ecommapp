import { constantValuesForMessages } from "@src/values/constants";
import { findAUserAndUpdateFields } from "@src/utilities/user";
import { createInstanceEmailBody } from "@src/utilities/email";
import { generateOTPAndExpiry } from "@src/utilities/otp";
import { sendMail } from "@src/services/email";
import { User } from "@src/types";

export const setResendCodeToTrue = async (id: string) => {
  const m = constantValuesForMessages();
  return await findAUserAndUpdateFields(id, { isResendCode: m.yes });
};

export const sendResetOTPEmail = async (user: User) => {
  const m = constantValuesForMessages();
  // OTP Generation Only
  const { generatedOTP, expiry } = generateOTPAndExpiry();
  // Store New OTP Code and Expiry for User
  await findAUserAndUpdateFields(user.id, {
    otp: generatedOTP,
    expiresAt: expiry,
  });
  // Send OTP Verification Email
  const { email } = user;
  const emailToUser = createInstanceEmailBody(email, generatedOTP);
  await sendMail(emailToUser);
  // Set ResendCode to False
  await findAUserAndUpdateFields(user.id, { isResendCode: m.no });
};
