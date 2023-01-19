export const generateRandomNumber = (numOfDigits) => {
  return Math.floor(
    Math.pow(10, numOfDigits - 1) +
      Math.random() * 9 * Math.pow(10, numOfDigits - 1)
  );
};
