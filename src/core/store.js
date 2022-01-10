import { configureStore } from "@reduxjs/toolkit";
import rootSaga from "./rootSaga";
import createSagaMiddleware from "redux-saga";
import productsReducer from "../common/state/ProductsSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    products: productsReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
