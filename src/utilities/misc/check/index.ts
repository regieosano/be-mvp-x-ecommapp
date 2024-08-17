import constantMessageValue from "@src/constants/stringnummisc";

export const checkJSONBody = (bodyData: object) => {
  return JSON.parse(JSON.stringify(bodyData));
};

export const returnCheckMessage = (data: object, message: string) => {
  return {
    message,
    data,
    http: constantMessageValue.internal_server_error_code,
  };
};
