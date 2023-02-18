import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryProducts: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    SET_PRODUCTS: (state, action) => {
      state.categoryProducts = action.payload;
    },
  },
});

export const { SET_PRODUCTS } = productSlice.actions;
export const selectCategoryProducts = (state) => state.product.categoryProducts;

export default productSlice.reducer;
