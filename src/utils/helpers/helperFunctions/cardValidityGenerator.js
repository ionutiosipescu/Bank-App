export const cardValidityGenerator = (dateString) => {
  let date = new Date(dateString);
  date.setFullYear(date.getFullYear() + 6);
  return date.toISOString().split("T")[0];
};
