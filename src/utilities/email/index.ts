import { sendMail } from "@src/utilities/email/sendemail";
import constantMessageValue from "@src/constants/stringnummisc";
import { constantValuesForEmail } from "@src/utilities/email/sendemail/content";

export async function createInstanceEmailBodyAndSendMail(
  userEmail: string,
  otp: string,
) {
  const e = constantValuesForEmail();

  const emailToUser = {
    emailSentTo: userEmail,
    emailSubject: e.subject_content,
    emailText: e.text_content,
    emailComposed: e.html_content + " " + otp,
  };

  const info = await sendMail(emailToUser);

  const result = {
    message: constantMessageValue.email_sent_message,
    data: { to: userEmail, system: info },
    http: constantMessageValue.ok,
  };

  return result;
}
