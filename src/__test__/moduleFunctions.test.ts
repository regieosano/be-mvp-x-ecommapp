import { generateOTPAndExpiry } from "@src/utilities/otp";

const mockAuthenticateUser = jest.fn((_id, otpInput) => {
  if (_id === "66b6cb7f6b401c303797f733" && otpInput === "689044") {
    return "Server Info: This user has been verified already";
  } else {
    return "Server Info: Still checking...";
  }
});

test("authenticate user", () => {
  const result = mockAuthenticateUser("66b6cb7f6b401c303797f733", "689044");
  expect(result).toBe("Server Info: This user has been verified already");
});

const mockGenerateOTPAndExpiry = jest.fn(generateOTPAndExpiry);

test("generate otp and expiry", () => {
  const result = mockGenerateOTPAndExpiry();
  expect(result.generatedOTP).toMatch(/\w+/);
});
