import logger from "redux-logger";
import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./root-reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import { Middleware, applyMiddleware, compose } from "@reduxjs/toolkit";
// if development run logger
// if production dont run logger

export type RootState = ReturnType<typeof rootReducer>;

// declare global {
//   interface Window {
//     __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
//   }
// }

const middleWares = [
  process.env.NODE_ENV !== "production" && logger,
  thunk,
].filter((middleware): middleware is Middleware => Boolean(middleware));

// const composeEnhancer =
//   (process.env.NODE_ENV !== "production" &&
//     window &&
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
//   compose;

// const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["login", "registerErrors"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: middleWares,
});

export const persistor = persistStore(store);
