import { listSaga } from "../../../common/generatorSaga";
import { actions } from "./ProductsSlice";
import { fetchData } from "../../../common/fetchData";

export function* watchFetchProducts() {
  yield listSaga({
    actions,
    fetchData,
  });
}
