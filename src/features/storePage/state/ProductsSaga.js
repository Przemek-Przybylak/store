import { call, delay, put, takeLatest } from "redux-saga/effects";
import {
  fetchAllProducts,
  setApplicationStatus,
  fetchAllProductsSuccess,
} from "./ProductsSlice";
import { fetchData } from "../fetchData";

function* fetchProductsHandler() {
  try {
    delay(1000);
    const allProducts = yield call(fetchData);
    yield put(fetchAllProductsSuccess(allProducts));
  } catch (error) {
    yield put(setApplicationStatus("error"));
  }
}

function* fetchCategoriesHandler() {
  try {
    const allCategories = yield call(fetchData(categories));
    yield put()
  }
}

export function* watchProducts() {
  yield takeLatest(fetchAllProducts.type, fetchCategoriesHandler)
  yield takeLatest(fetchAllProducts.type, fetchProductsHandler);
}
