import { listSaga } from "../../../common/generatorSaga";
import { actions } from "./ProductsSlice";
import { fetchAllProducts } from "../productsList/fetchProductsList";

export function* watchFetchProducts() {
  yield listSaga({
    actions,
    fetchAllProducts,
  });
}
