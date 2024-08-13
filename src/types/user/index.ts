export type User = {
  _id: string;
  name: string;
  address: string;
  dob: Date;
  email: string;
  cellNumber: string;
  gender: string;
  password: string;
  isVerified: boolean;
  otp: string;
  expiresAt: number;
};

export type UserList = User[] | null;
