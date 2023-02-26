export const searchById = (id, arr) => {
  return arr.some((obj) => obj.account_id === id);
};
