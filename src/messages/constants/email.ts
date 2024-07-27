const m = (function () {
  // Email Messages
  const EMAIL_SENT_MESSAGE = "Email successfully sent";
  const EMAIL_OTP_URL = "/send-otp-email";
  const EMAIL = "email";
  const EMAIL_HTML_TEXT = `Your email is being validated. This is your OTP -`;
  const FROM_ADDRESS = "The X App Team 2025 😊";
  const SUBJECT_CONTENT = "Email OTP Verification";
  const TEXT_CONTENT = "This is your OTP";
  const HTML_CONTENT = `<strong>${EMAIL_HTML_TEXT}</strong>`;

  return (function () {
    return {
      email: EMAIL,
      email_otp_url: EMAIL_OTP_URL,
      email_sent_message: EMAIL_SENT_MESSAGE,
      from_address: FROM_ADDRESS,
      subject_content: SUBJECT_CONTENT,
      text_content: TEXT_CONTENT,
      html_content: HTML_CONTENT,
    };
  })();
})();

export default m;
