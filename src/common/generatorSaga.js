import { call, put, takeLatest, delay } from "redux-saga/effects";

export function* listSaga({ actions, fetchAllProducts }) {
  function* fecthListHandler() {
    yield delay(1000);

    try {
      const response = yield call(fetchAllProducts);
      yield put(actions.fetchSuccess(response));
    } catch (error) {
      yield put(actions.fetchError());
    }
  }
  yield takeLatest(actions.fetch.type, fecthListHandler);
}
