import messageValue from "@src/messages/messagevalues";

export function constantValuesForEmail() {
  return (function () {
    return {
      from_address: messageValue.from_address,
      subject_content: messageValue.subject_content,
      text_content: messageValue.text_content,
      html_content: messageValue.html_content,
    };
  })();
}
