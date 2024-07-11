import nodemailer from "nodemailer";
import dotenv from "dotenv";
import { FROM_ADDRESS } from "@src/services/email/content";
import { objectEmailAndPortType, objectEmailBody } from "@src/types";

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

export const sendMail = async function (body: objectEmailBody) {
  const emailObject = {
    emailHost: process.env.HOST_EMAIL || "",
    emailPort: Number(process.env.EMAIL_PORT),
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
  } catch (error) {
    return new Error("There was an error!");
  }
};
