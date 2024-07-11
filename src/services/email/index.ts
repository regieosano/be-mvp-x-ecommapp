import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

type objectEmailPortType = {
  emailPort: number;
};

function createTransporter(hostPort: objectEmailPortType) {
  const emailHost = process.env.HOST_EMAIL;
  const { emailPort } = hostPort;

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
  const emailObject = { emailAddress: emailToBeSent, emailPort: 587 };
  const emailTransporter = createTransporter(emailObject);
  const { transporter, emailHost } = emailTransporter();
  const result = await transporter.sendMail({
    from: `"The X App 2025 👻" <${emailHost}>`,
    to: emailToBeSent,
    subject: "Email Test Send",
    text: "Hi there bozos!!!",
    html: "<b>Got it working bozos!!!</b>",
  });

  console.log("Email sent: %s", result.messageId);
};
