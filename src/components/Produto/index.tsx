import { useDispatch } from 'react-redux'
import { addFavorite } from '../../redux/favorites/slice'
import { addCart } from '../../redux/cart/slice'
import { Produto as ProdutoType } from '../../App'
import * as S from './styles'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../redux/store'

type Props = {
  produto: ProdutoType
}

export const paraReal = (valor: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    valor
  )

const ProdutoComponent = ({ produto }: Props) => {
  const dispatch = useDispatch()

  const { listItemsFavorite } = useSelector(
    (state: RootReducer) => state.favoriteSlice
  )

  return (
    <S.Produto>
      <S.Capa>
        <img src={produto.imagem} alt={produto.nome} />
      </S.Capa>
      <S.Titulo>{produto.nome}</S.Titulo>
      <S.Prices>
        <strong>{paraReal(produto.preco)}</strong>
      </S.Prices>
      <S.BtnComprar
        onClick={() => dispatch(addFavorite(produto))}
        type="button"
      >
        {listItemsFavorite.includes(produto)
          ? '- Remover dos favoritos'
          : '+ Adicionar aos favoritos'}
      </S.BtnComprar>
      <S.BtnComprar onClick={() => dispatch(addCart(produto))} type="button">
        Adicionar ao carrinho
      </S.BtnComprar>
    </S.Produto>
  )
}

export default ProdutoComponent
