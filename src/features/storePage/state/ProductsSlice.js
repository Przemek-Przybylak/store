import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    allProducts: [],
    allCategories: [],
    status: "",
  },
  reducers: {
    fetchAllProducts: (state) => {
      state.status = "loading";
    },
    fetchAllProductsSuccess: (state, { payload: allProducts }) => {
      state.allProducts = allProducts;
      state.status = "success";
    },
    setApplicationStatus: (state, { payload }) => {
      state.status = payload;
    },
  },
});

export const {
  fetchAllProducts,
  fetchAllProductsSuccess,
  setApplicationStatus,
} = productsSlice.actions;

export const selectAllProducts = (state) => state.products.allProducts;
export const selectStatus = (state) => state.products.status;

export default productsSlice.reducer;
