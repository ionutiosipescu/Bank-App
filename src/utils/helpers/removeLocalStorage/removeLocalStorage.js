// import { persistStore } from "redux-persist";

// export const removePersistedState = () => {
//   persistStore().purge();
// };
export const removePersistedState = () => {
  localStorage.removeItem("persist:root");
};
