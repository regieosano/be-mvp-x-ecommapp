import messageValue from "@src/messages/messagevalues";
import { sendMail } from "@src/utilities/email/sendemail";
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
    message: messageValue.email_sent_message,
    data: { to: userEmail, system: info },
    http: messageValue.ok,
  };

  return result;
}
