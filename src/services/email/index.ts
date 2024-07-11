import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

function getTransporter() {
  const email_port = 587;
  const email_host = process.env.HOST_EMAIL;

  const transporter = nodemailer.createTransport({
    host: email_host,
    port: email_port,
    secure: false,
    auth: {
      user: process.env.APP_USER,
      pass: process.env.APP_PASSWORD,
    },
  });
  return function () {
    return { transporter, email_host };
  };
}

export const sendMail = async function () {
  const emailTransporter = getTransporter();
  const { transporter, email_host } = emailTransporter();
  const result = await transporter.sendMail({
    from: `"The X App 2025 👻" <${email_host}>`,
    to: "regie30developer@gmail.com",
    subject: "Email Test Send",
    text: "Hi there bozos!!!",
    html: "<b>Got it working bozos!!!</b>",
  });

  console.log("Email sent: %s", result.messageId);
};
