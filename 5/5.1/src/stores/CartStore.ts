import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';
import CartArticleType from '@/types/CartArticleShema';

const cartArticles: CartArticleType[] = [];

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartArticles, // [{ id, name, price, quantity }]
    totalItems: 0,
    totalPrice: 0,
  },
  reducers: {
    addToCart: (state, action: PayloadAction<CartArticleType>) => {
      const product = action.payload;
      const existingItem = state.cartArticles.find((item) => item.id === product.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartArticles.push({ ...product, quantity: 1 });
      }

      state.totalItems += 1;
      state.totalPrice += product.price;
    },
    removeFromCart: (state, action) => {
      const productId = action.payload;
      const existingItem = state.cartArticles.find((item) => item.id === productId);

      if (existingItem) {
        state.totalItems -= existingItem.quantity;
        state.totalPrice -= existingItem.price * existingItem.quantity;
        state.cartArticles = state.cartArticles.filter((item) => item.id !== productId);
      }
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const existingItem = state.cartArticles.find((item) => item.id === id);

      if (existingItem) {
        const quantityDiff = quantity - existingItem.quantity;
        existingItem.quantity = quantity;
        state.totalItems += quantityDiff;
        state.totalPrice += quantityDiff * existingItem.price;
      }
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;

// Store
const CartStore = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

export type RootState = ReturnType<typeof CartStore.getState>;
export type AppDispatch = typeof CartStore.dispatch;
export default CartStore;
