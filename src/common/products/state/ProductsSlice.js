const productsSlice = createSlice({
    name: "products",
    initialState: {
        allProducts: [],
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
        fetchAllProductsError: (state, { payload: error }) => {
            state.status = "error";
        },
    },
});

export const {
    fetchAllProducts,
    fetchAllProductsSuccess,
    fetchAllProductsError,
} = productsSlice.actions;

export const selectAllProducts = (state) => state.products.allProducts;
export const selectStatus = (state) => state.products.status;

export default  productsSlice.reducer;

