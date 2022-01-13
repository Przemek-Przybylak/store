import { generatorSlice } from "../../../common/generatorSlice";

export const productsSlice = generatorSlice({
  name: "products",
});

export const { actions, selectors } = productsSlice;

export default productsSlice.reducer;
