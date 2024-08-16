import constantMessageValue from "@src/constants/stringnummisc";

export function constantValuesForEmail() {
  return (function () {
    return {
      from_address: constantMessageValue.from_address,
      subject_content: constantMessageValue.subject_content,
      text_content: constantMessageValue.text_content,
      html_content: constantMessageValue.html_content,
    };
  })();
}
