export const findObjectByString = (string, array, stringCompare) => {
  return array.find((obj) => obj[stringCompare] === string);
};
