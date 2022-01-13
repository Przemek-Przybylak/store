import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "initial",
};

export const sliceGenerator = ({ name }) => {
  const slice = createSlice({
    name,
    initialState,
    reducers: {
      fetch: () => ({
        status: "loading",
      }),
      fetchSuccess: (_, { payload }) => ({
        details: payload,
        status: "success",
      }),
      fetchError: () => ({
        status: "error",
      }),
      clear: () => initialState,
    },
  });
};

return {
  reducer: slice.reducer,
  actions: slice.actions,
  selectors: {
    selectDetails: (state) => state[name].details,
    selectStatus: (state) => state[name].status,
  },
};
