import { all } from "@redux-saga/core/effects";
import { watchFetchProducts } from "../features/storePage/state/ProductsSaga";

export default function* rootSaga() {
  yield all([watchFetchProducts()]);
}
