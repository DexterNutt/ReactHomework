import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import CakeReducer from "./reducers/CakeReducer";
import TodoReducer from "./reducers/TodoReducer";

const reducer = {
  CakeReducer: CakeReducer,
  TodoReducer: TodoReducer,
};

export default configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
