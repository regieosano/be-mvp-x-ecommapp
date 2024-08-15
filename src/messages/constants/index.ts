import fs from "fs";

export default (function getMessagesObjectConstants() {
  const fileLoc = "src/messages/constants/values.json";
  const messagesData = JSON.parse(JSON.stringify(fs.readFileSync(fileLoc)));
  const bufferedData = Buffer.from(messagesData);
  const messagesObject = JSON.parse(bufferedData.toString("utf-8"));

  return (function () {
    return messagesObject;
  })();
})();
