import { all } from "@redux-saga/core/effects";
import { watchProducts } from "../features/storePage/state/ProductsSaga";

export default function* rootSaga() {
  yield all([watchProducts()]);
}
