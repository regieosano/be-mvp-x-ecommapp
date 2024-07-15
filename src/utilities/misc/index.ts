export const transformToNumber = (value?: string) => {
  return Number(value);
};

export const checkJSONBodyData = (bodyData: object) => {
  return JSON.parse(JSON.stringify(bodyData));
};
