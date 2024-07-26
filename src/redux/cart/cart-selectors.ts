import { RootReducer } from '../store'

//Chama a função de acordo com a atualização do proprio estado/state
export const totalPrice = (state: RootReducer) => {
  return state.cartSlice.listItemsCart.reduce(
    (acc, curr) => acc + curr.preco,
    0
  )
}
