import { all } from "@redux-saga/core/effects";
import { watchProducts } from "../common/state/ProductsSaga";

export default function* rootSaga() {
  yield all([watchProducts()]);
}
