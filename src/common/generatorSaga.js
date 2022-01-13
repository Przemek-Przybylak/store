import { fetchData } from "./fetchData";
import { call, put, takeLatest, delay } from "redux-saga/effects";

export function* listSaga({ actions }) {
  function* fecthListHandler() {
    yield delay(1000);

    try {
      const response = yield call(fetchData);
      console.log(response);
      yield put(actions.fetchSuccess(response));
    } catch (error) {
      yield put(actions.fetchError());
    }
  }
  yield takeLatest(actions.fetch.type, fecthListHandler);
}
