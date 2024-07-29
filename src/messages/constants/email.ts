const m = (function () {
  // Email Messages
  const EMAIL = "email";
  const EMAIL_OTP_URL = "/send-otp-email";
  const TEXT_CONTENT = "This is your OTP";
  const FROM_ADDRESS = "The X App Team 2025 😊";
  const SUBJECT_CONTENT = "Email OTP Verification";
  const EMAIL_SENT_MESSAGE = "Email successfully sent";
  const HTML_CONTENT = `<strong>${returnHTMLContent}</strong>`;
  function returnHTMLContent() {
    return `Your email is being validated. This is your OTP -`;
  }

  return (function () {
    return {
      email: EMAIL,
      text_content: TEXT_CONTENT,
      html_content: HTML_CONTENT,
      from_address: FROM_ADDRESS,
      email_otp_url: EMAIL_OTP_URL,
      subject_content: SUBJECT_CONTENT,
      email_sent_message: EMAIL_SENT_MESSAGE,
    };
  })();
})();

export default m;
