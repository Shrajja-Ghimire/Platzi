import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { watchFetchProducts } from "../sagas";
import { rootReducer } from "../reducers";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(watchFetchProducts);

export default store;
