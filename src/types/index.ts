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
  _id: string;
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
  _id: string;
  name: string;
  description: string;
}

export interface Product {
  _id: string;
  category: string;
  name: string;
  description: string;
  price: number;
  qty: number;
}

export interface ShoppingCart {
  _id: string;
  shopper: string;
  products: [string];
}

export interface OTPData {
  _id: string;
  otpInput: string;
  expiresAt: number;
}

export interface KeySearchObject {
  _id: string;
  otherField: string;
}

export interface EmailOTP {
  email: string;
  otp: string;
}

export interface ResendOTP {
  _id: string;
}
