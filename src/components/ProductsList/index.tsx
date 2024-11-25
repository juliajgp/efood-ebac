import Product from '../Product'
import Restaurant from '../Restaurant'

import * as S from './styles'

export type Props = {
  restaurantes?: Restaurantes[]
  products?: Produto[]
  tipopagina: 'home' | 'perfil'
}

const ProductsList = ({ tipopagina, restaurantes, products }: Props) => {
  if (tipopagina === 'home') {
    return (
      <S.Container tipopagina={tipopagina}>
        <div className="container">
          <S.List tipopagina={tipopagina}>
            {restaurantes &&
              restaurantes.map((restaurante) => (
                <li key={restaurante.id}>
                  <Restaurant
                    id={restaurante.id}
                    tipo={restaurante.tipo}
                    descricao={restaurante.descricao}
                    capa={restaurante.capa}
                    titulo={restaurante.titulo}
                    avaliacao={restaurante.avaliacao}
                    destacado={restaurante.destacado}
                  />
                </li>
              ))}
          </S.List>
        </div>
      </S.Container>
    )
  }
  else {
    return (
      <S.Container tipopagina={tipopagina}>
        <div className="container">
          <S.List tipopagina={tipopagina}>
            {products && products.map((product) => (
              <Product
                id={product.id}
                descricao={product.descricao}
                foto={product.foto}
                preco={product.preco}
                nome={product.nome}
                porcao={product.porcao}
              />
            ))}
          </S.List>
        </div>
      </S.Container>
    )
  }
}

export default ProductsList
