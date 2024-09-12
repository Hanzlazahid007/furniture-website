import { createSlice } from "@reduxjs/toolkit";

const storeLocalStorage = (data) => {
  localStorage.setItem("cart", JSON.stringify(data));
};
export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    data: [],
    totalAmount: 0,
    totalItem: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const existprod = state.data.find(
        (item) => item.id === action.payload.id
      );
      if (existprod) {
        const tempCart = state.data.map((prod) => {
          if (prod.id === action.payload.id) {
            let newQuant = prod.quantity + action.payload.quantity;
            let newTotoalAmount = newQuant + prod.price;

            return {
              ...prod,
              quantity: newQuant,
              totalPrice: newTotoalAmount,
            };
          } else {
            return prod;
          }
        });
        state.data = tempCart;
        storeLocalStorage(state.data);
      } else {
        state.data.push(action.payload);
        storeLocalStorage(state.data);
      }
    },
    removeItem: (state, action) => {
      const temp = state.data.filter((item) => item.id !== action.payload.id);
      state.data = temp;
      storeLocalStorage(state.data);
    },
    getCartTotal: (state, action) => {
      state.totalAmount = state.data.reduce((total, item) => {
        return total + item.price;
      });
      state.totalItem = state.data.length;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeItem, getCartTotal } = cartSlice.actions;

export default cartSlice.reducer;
