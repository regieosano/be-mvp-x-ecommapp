import { constantValuesForEmail } from "@src/services/email/content";
import { sendMail } from "@src/services/email";

export async function createInstanceEmailBodyAndSendMail(
  userEmail: string,
  otp: string,
) {
  try {
    const e = constantValuesForEmail();

    const emailToUser = {
      emailSentTo: userEmail,
      emailSubject: e.subject_content,
      emailText: e.text_content,
      emailComposed: e.html_content + " " + otp,
    };

    const result = await sendMail(emailToUser);
    return result;
  } catch (error: unknown) {
    throw `${error}`;
  }
}
