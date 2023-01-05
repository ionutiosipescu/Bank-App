import { applyMiddleware } from "redux";
import logger from "redux-logger";
import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./root-reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

// if development run logger
// if production dont run logger
const middleWares = [
  process.env.NODE_ENV === "development" && logger,
  thunk,
].filter(Boolean);

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["login"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: middleWares,
});

export const persistor = persistStore(store);

// export async function resetLocalStorage() {
//   try {
//     // Purge and flush local storage
//     await persistor.purge();
//     await persistor.flush();

//     // Get initial values from Redux store
//     const initialValues = store.getState();

//     // Set initial values in local storage
//     Object.keys(initialValues).forEach((key) => {
//       localStorage.setItem(key, initialValues[key]);
//     });
//   } catch (error) {
//     console.error(error);
//   }
// }
