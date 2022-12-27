import { applyMiddleware } from "redux";
import logger from "redux-logger";
import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./root-reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// varianta cu logger

const createStoreWithMiddlerware = applyMiddleware(logger)(configureStore);

export const store = createStoreWithMiddlerware({ reducer: rootReducer });

// varianta cu logger si local storage care momentan functioneaza doar local storage nu si logger

// const persistConfig = {
//   key: "root",
//   storage,
//   blacklist: ["login", "_persist"],
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const createStoreWithMiddlerware = applyMiddleware(logger);

// export const store = configureStore({
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: false,
//     }),
//   logger,
// });

// export const persistor = persistStore(store);
