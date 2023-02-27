export const findObjectByString = (string, array, stringCompare) => {
  if (!array) return;
  return array?.find((obj) => obj[stringCompare] === string);
};
