import { call, put, takeLatest, delay } from "redux-saga/effects";

export function* listSaga({ actions, fetchData }) {
  function* fecthListHandler(path) {
    yield delay(1000);

    try {
      console.log(path.payload);
      const response = yield call(fetchData(path.payload));
      console.log(response);
      yield put(actions.fetchSuccess(response));
    } catch (error) {
      yield put(actions.fetchError());
    }
  }
  yield takeLatest(actions.fetch.type, fecthListHandler);
}
