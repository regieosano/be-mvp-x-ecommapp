import nodemailer from "nodemailer";
import { ObjectEmailAndPortType } from "@src/types";

export function createTransporter(emailHostPort: ObjectEmailAndPortType) {
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
