import mV from "@src/messages/constants/email";

export function constantValuesForEmail() {
  return (function () {
    return {
      from_address: mV.from_address,
      subject_content: mV.subject_content,
      text_content: mV.text_content,
      html_content: mV.html_content,
    };
  })();
}
