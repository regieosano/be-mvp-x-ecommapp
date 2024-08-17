import constantMessageValue from "@src/constants/stringnummisc";

export const checkJSONBody = (bodyData: object) => {
  return JSON.parse(JSON.stringify(bodyData));
};

export const returnResultAsChecked = (
  objectData: object,
  resultMessage: string,
) => {
  return {
    message: resultMessage,
    data: objectData,
    http: constantMessageValue.internal_server_error_code,
  };
};
