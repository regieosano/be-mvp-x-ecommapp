import { constantValuesForEmail } from "@src/services/email/content";

export function createInstanceEmailBody(userEmail: string, otp: string) {
  const e = constantValuesForEmail();

  const emailToUser = {
    emailSentTo: userEmail,
    emailSubject: e.subject_content,
    emailText: e.text_content,
    emailComposed: e.html_content + " " + otp,
  };

  return emailToUser;
}
