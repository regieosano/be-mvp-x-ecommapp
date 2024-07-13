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
  emailHTML: string;
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
}
