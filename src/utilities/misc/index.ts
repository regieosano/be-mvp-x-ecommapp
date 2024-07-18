export const transformToNumber = (value?: string) => {
  return Number(value);
};

export const checkJSONBodyData = (bodyData: object) => {
  return JSON.parse(JSON.stringify(bodyData));
};

export default function reverseBooleanValue(booleanValue: boolean) {
  return booleanValue ? false : true;
}

export const compare = (
  itemToBeCheck: string | number,
  itemCheckAgaints: Array<string | number>,
) => {
  return itemCheckAgaints.includes(itemToBeCheck);
};

export const otpIsStillValid = (valueOne: number, valueTwo: number) => {
  return valueOne > valueTwo;
};
