export const getLocalDate = () => {
  const createdAt = new Date();

  const year = createdAt.toLocaleString("default", { year: "numeric" });
  const month = createdAt.toLocaleString("default", { month: "2-digit" });
  const day = createdAt.toLocaleString("default", { day: "2-digit" });

  const formattedDate = year + "-" + month + "-" + day;
  return formattedDate;
};
