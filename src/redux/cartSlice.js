import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload.attributes;
      const currentItem = product? {
        title: product.title,
        key: product.key,
        price: product.price,
        Img: product.Img.data.attributes.url,
      }: action.payload;

      const index = state.cart.findIndex(
        (item) => item.key === currentItem.key
      );

      if (index === -1) {
        state.cart.push({ ...currentItem, quantity: 1 });
      } else {
        state.cart[index].quantity += 1;
      }
    },

    removeFromCart: (state, action) => {
      const currentKey = action.payload?.attributes?.key || action.payload.key;
      const index = state.cart.findIndex(
        (item) => item.key === currentKey
      );

      if(index === -1) return;

      if (state.cart[index].quantity === 1) {
        state.cart = state.cart.filter((item) => item.key !== currentKey);
      } else {
        state.cart[index].quantity -= 1;
      }
    },
    resetCart:(state,action)=>{
      state.cart = []
    }
  },
});

export default cartSlice.reducer;

export const { addToCart, removeFromCart,resetCart } = cartSlice.actions;
