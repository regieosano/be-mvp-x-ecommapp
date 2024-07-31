export const checkJSONBody = (bodyData: object) => {
  return JSON.parse(JSON.stringify(bodyData));
};

export const returnCheckMessage = (message: string) => {
  throw message;
};
