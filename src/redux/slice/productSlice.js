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
    INCREASE_AMOUNT: (state, action) => {
      state.cartItems = state.cartItems.map((item) => {
        if (item.id === action.payload)
          return { ...item, amount: item.amount + 1 };
        return item;
      });
    },
    DECREASE_AMOUNT: (state, action) => {
      state.cartItems = state.cartItems.map((item) => {
        if (item.id === action.payload)
          return { ...item, amount: item.amount - 1 };
        return item;
      });
    },
    REMOVE_PRODUCT: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },
    REMOVE_PRODUCTS: (state, action) => {
      state.cartItems = [];
    },
  },
});

export const {
  ADD_PRODUCT,
  INCREASE_AMOUNT,
  DECREASE_AMOUNT,
  REMOVE_PRODUCT,
  REMOVE_PRODUCTS,
} = productSlice.actions;
export const selectCartItems = (state) => state.product.cartItems;

export default productSlice.reducer;
