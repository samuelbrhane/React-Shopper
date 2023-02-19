import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    ADD_PRODUCT: (state, action) => {
      const findProduct = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (!findProduct) {
        state.cartItems = [
          ...state.cartItems,
          { ...action.payload, amount: 1 },
        ];
      }
    },
  },
});

export const { ADD_PRODUCT } = productSlice.actions;
export const selectCartItems = (state) => state.product.cartItems;

export default productSlice.reducer;
