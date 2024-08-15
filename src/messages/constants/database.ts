import messageValue from "@src/messages/messagevalues";

const m = (function () {
  // DB Messages
  const dbIsToConnect = () => messageValue.no;

  return (function () {
    return {
      db_is_toconnect: dbIsToConnect(),
    };
  })();
})();

export default m;
