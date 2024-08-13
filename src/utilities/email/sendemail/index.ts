import dotenv from "dotenv";
import { ObjectEmailBody } from "@src/types";
import mO from "@src/messages/constants/others";
import { constantValuesForEmail } from "@src/utilities/email/sendemail/content";
import { createTransporter } from "@src/utilities/email/sendemail/mailtransporter";

dotenv.config();

export const sendMail = async function (_body: ObjectEmailBody) {
  const e = constantValuesForEmail();
  const emailObject = {
    emailHost: process.env.HOST_EMAIL || mO.empty_string,
    emailPort: Number(process.env.EMAIL_PORT),
  };
  const { emailSentTo, emailSubject, emailText, emailComposed } = _body;
  const emailTransporter = createTransporter(emailObject);
  const { transporter, emailHost } = emailTransporter();

  const result = await transporter.sendMail({
    from: `${e.from_address} <${emailHost}>`,
    to: emailSentTo,
    subject: emailSubject,
    text: emailText,
    html: emailComposed,
  });

  return result.response;
};
