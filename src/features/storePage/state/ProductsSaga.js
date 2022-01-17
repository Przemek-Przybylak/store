import { listSaga } from "../../../common/generatorSaga";
import { actions } from "./ProductsSlice";
import { fetchProducts } from "../../../common/fetchData";

export function* watchFetchProducts() {
  yield listSaga({
    actions,
    fetchProducts,
  });
}
