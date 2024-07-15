import nodemailer from "nodemailer";
import dotenv from "dotenv";
import { FROM_ADDRESS } from "@src/services/email/content";
import { transformToNumber } from "@src/utilities/misc";
import { ObjectEmailAndPortType, ObjectEmailBody } from "@src/types";

dotenv.config();

function createTransporter(emailHostPort: ObjectEmailAndPortType) {
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

export const sendMail = async function (body: ObjectEmailBody) {
  const emailObject = {
    emailHost: process.env.HOST_EMAIL || "",
    emailPort: transformToNumber(process.env.EMAIL_PORT),
  };
  const { emailSentTo, emailSubject, emailText, emailHTML } = body;
  const emailTransporter = createTransporter(emailObject);
  const { transporter, emailHost } = emailTransporter();
  try {
    const result = await transporter.sendMail({
      from: `${FROM_ADDRESS} <${emailHost}>`,
      to: emailSentTo,
      subject: emailSubject,
      text: emailText,
      html: emailHTML,
    });

    console.log("Email sent: %s", result.messageId);

    return "Email Sent";
  } catch (error: unknown) {
    throw `${error}`;
  }
};
