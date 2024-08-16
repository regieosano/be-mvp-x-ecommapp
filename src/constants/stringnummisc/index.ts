import fs from "fs";
import dotenv from "dotenv";

dotenv.config();

export default (function stringNumMiscObjectValues() {
  const messagesData = JSON.parse(
    JSON.stringify(fs.readFileSync(process.env.CONSTANTS_VALUES_PATH || "")),
  );

  const bufferedData = Buffer.from(messagesData);
  const messagesObject = JSON.parse(bufferedData.toString("utf-8"));

  return (function () {
    return messagesObject;
  })();
})();
