import nodemailer from "nodemailer";
import dotenv from "dotenv";
import { FROM_ADDRESS } from "@src/services/email/content";
import { objectEmailAndPortType } from "@src/types";

dotenv.config();

function createTransporter(emailHostPort: objectEmailAndPortType) {
  const { emailHost, emailPort } = { ...emailHostPort };

  const transporter = nodemailer.createTransport({
    host: emailHost,
    port: emailPort,
    auth: {
      user: process.env.APP_USER,
      pass: process.env.APP_PASSWORD,
    },
  });
  return function () {
    return { transporter, emailHost };
  };
}

export const sendMail = async function (emailToBeSent: string) {
  const emailObject = {
    emailHost: process.env.HOST_EMAIL || "",
    emailPort: Number(process.env.EMAIL_PORT),
  };
  const emailTransporter = createTransporter(emailObject);
  const { transporter, emailHost } = emailTransporter();
  const result = await transporter.sendMail({
    from: `${FROM_ADDRESS} <${emailHost}>`,
    to: emailToBeSent,
    subject: "Email Test Send",
    text: "Hi there bozos!!!",
    html: "<b>Got it working bozos!!!</b>",
  });

  console.log("Email sent: %s", result.messageId);
};
