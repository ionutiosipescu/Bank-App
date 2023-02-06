export const upperCaseFirstInitial = (string) => {
  // remove all "_" and replace with " "
  string = string.replace(/_/g, " ");
  // return string: "String"
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const upperCaseFirst = (string) => {
  if (!string) return;
  return string.charAt(0).toUpperCase() + string.slice(1);
};
