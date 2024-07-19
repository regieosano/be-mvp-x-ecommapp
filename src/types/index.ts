// Use for sending email
export interface ObjectEmailAndPortType {
  emailHost: string;
  emailPort: number;
}
// Use for sending email
export interface ObjectEmailBody {
  emailSentTo: string;
  emailSubject: string;
  emailText: string;
  emailComposed: string;
}

// User model
export interface User {
  id: string;
  name: string;
  address: string;
  dob: Date;
  email: string;
  cellNumber: string;
  gender: string;
  password: string;
  isVerified: boolean;
  isResendCode: boolean;
  otp: string;
  expiresAt: number;
}

export interface OTPData {
  id: string;
  otp: string;
  expiresAt: number;
}

export interface KeySearchObject {
  id: string;
  email: string;
}
