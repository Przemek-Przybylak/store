import { call, put, takeLatest, delay } from "redux-saga/effects";

export function* listSaga({ actions, fetchData }) {
  function* fecthListHandler() {
    yield delay(1000);

    try {
      const response = yield call(fetchData);
      yield put(actions.fetchSuccess(response));
    } catch (error) {
      yield put(actions.fetchError());
    }
  }
  yield takeLatest(actions.fetch.type, fecthListHandler);
}
