import { configureStore } from '@reduxjs/toolkit'
import cartSliceReducer from './cart/slice'
import favoriteSliceReducer from './favorites/slice'
import api from './services/api'

export const store = configureStore({
  reducer: {
    cartSlice: cartSliceReducer,
    favoriteSlice: favoriteSliceReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
