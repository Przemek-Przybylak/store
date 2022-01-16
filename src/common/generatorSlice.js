import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "initial",
};

export const generatorSlice = ({ name }) => {
  const slice = createSlice({
    name,
    initialState,
    reducers: {
      fetch: () => ({
        status: "loading",
      }),
      fetchSuccess: (_, { payload }) => ({
        products: payload,
        status: "success",
      }),
      fetchError: () => ({
        status: "error",
      }),
      clear: () => initialState,
    },
  });

  return {
    reducer: slice.reducer,
    actions: slice.actions,
    selectors: {
      selectProducts: (state) => state[name].products,
      selectStatus: (state) => state[name].status,
    },
  };
};
