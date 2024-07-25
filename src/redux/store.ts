import { configureStore } from '@reduxjs/toolkit'
import cartSliceReducer from './cart/slice'
import favoriteSliceReducer from './favorites/slice'

export const store = configureStore({
  reducer: {
    cartSlice: cartSliceReducer,
    favoriteSlice: favoriteSliceReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>
