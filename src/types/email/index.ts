export type EmailOTP = {
  email: string;
  otp: string;
};

export type ObjectEmailAndPortType = {
  emailHost: string;
  emailPort: number;
};

export type ObjectEmailBody = {
  emailSentTo: string;
  emailSubject: string;
  emailText: string;
  emailComposed: string;
};
