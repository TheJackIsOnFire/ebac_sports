import { useSelector } from 'react-redux'
import { RootReducer } from '../../redux/store'

import * as S from './styles'
import cesta from '../../assets/cesta.png'
import { paraReal } from '../Produto'

const Header = () => {
  const items = useSelector(
    (state: RootReducer) => state.cartSlice.listItemsCart
  )

  const favorites = useSelector(
    (state: RootReducer) => state.favoriteSlice.listItemsFavorite
  )

  const valorTotal = items.reduce((acc, item) => {
    acc += item.preco
    return acc
  }, 0)

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <span>{favorites.length} favoritos</span>
        <img src={cesta} />
        <span>
          {items.length} itens, valor total: {paraReal(valorTotal)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
