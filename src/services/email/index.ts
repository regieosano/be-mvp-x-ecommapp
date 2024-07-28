import dotenv from "dotenv";
import nodemailer from "nodemailer";
import mO from "@src/messages/constants/others";
import { constantValuesForEmail } from "@src/services/email/content";
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

export const sendMail = async function (_body: ObjectEmailBody) {
  const e = constantValuesForEmail();
  const emailObject = {
    emailHost: process.env.HOST_EMAIL || mO.empty_string,
    emailPort: Number(process.env.EMAIL_PORT),
  };
  const { emailSentTo, emailSubject, emailText, emailComposed } = _body;
  const emailTransporter = createTransporter(emailObject);
  const { transporter, emailHost } = emailTransporter();
  try {
    const result = await transporter.sendMail({
      from: `${e.from_address} <${emailHost}>`,
      to: emailSentTo,
      subject: emailSubject,
      text: emailText,
      html: emailComposed,
    });

    return result.response;
  } catch (error: unknown) {
    throw `${error}`;
  }
};
