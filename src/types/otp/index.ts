export interface OTPData {
  _id: string;
  otpInput: string;
  expiresAt: number;
}

export interface ResendOTP {
  _id: string;
}
