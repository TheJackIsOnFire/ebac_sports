import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type StateFavorite = {
  listItemsFavorite: Produto[]
}

const initialState: StateFavorite = {
  listItemsFavorite: []
}

const favoritesSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<Produto>) => {
      const favorite = action.payload

      if (state.listItemsFavorite.find((f) => f.id === favorite.id)) {
        state.listItemsFavorite = state.listItemsFavorite.filter(
          (f) => f.id !== favorite.id
        )
      } else {
        state.listItemsFavorite.push(favorite)
      }
    }
  }
})

export const { addFavorite } = favoritesSlice.actions
export default favoritesSlice.reducer
