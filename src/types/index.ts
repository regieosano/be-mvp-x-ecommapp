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

export interface Category {
  id: string;
  name: string;
  description: string;
}

export interface Product {
  id: string;
  category: string;
  name: string;
  description: string;
  price: number;
  qty: number;
}

export interface ShoppingCart {
  id: string;
  userId: string;
  products: [string];
}

export interface OTPData {
  id: string;
  otpInput: string;
  expiresAt: number;
}

export interface KeySearchObject {
  id: string;
  otherField: string;
}

export interface EmailOTP {
  email: string;
  otp: string;
}

export interface ResendOTP {
  id: string;
}
