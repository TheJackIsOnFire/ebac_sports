import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type StateCart = {
  listItemsCart: Produto[]
}

const initialState: StateCart = {
  listItemsCart: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCart: (state, action: PayloadAction<Produto>) => {
      const product = action.payload

      if (state.listItemsCart.find((p) => p.id === product.id)) {
        alert('Item já adicionado')
      } else {
        state.listItemsCart.push(product)
      }
    }
  }
})

export const { addCart } = cartSlice.actions
export default cartSlice.reducer
