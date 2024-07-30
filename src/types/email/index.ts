export interface EmailOTP {
  email: string;
  otp: string;
}

export interface ObjectEmailAndPortType {
  emailHost: string;
  emailPort: number;
}

export interface ObjectEmailBody {
  emailSentTo: string;
  emailSubject: string;
  emailText: string;
  emailComposed: string;
}
