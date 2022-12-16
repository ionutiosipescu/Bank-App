import { applyMiddleware } from "redux";
import logger from "redux-logger";
import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./root-reducer";

const createStoreWithMiddlerware = applyMiddleware(logger)(configureStore);

export const store = createStoreWithMiddlerware({ reducer: rootReducer });
