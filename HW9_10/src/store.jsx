import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import CakeReducer from "./reducers/CakeReducer";

const reducer = {
  CakeReducer: CakeReducer,
};

export default configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
