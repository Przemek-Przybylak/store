import { listSaga } from "../../../common/generatorSaga";
import { actions } from "./ProductsSlice";

export function* watchFetchProducts() {
  yield listSaga({
    actions,
  });
}
