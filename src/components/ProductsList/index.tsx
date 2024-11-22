import Product from '../Product'
import Restaurant from '../Restaurant'

import { Container, List } from './styles'

export type Props = {
  restaurantes?: Restaurantes[]
  products?: Produto[]
  tipoPagina: 'home' | 'perfil'
}

const ProductsList = ({ tipoPagina, restaurantes, products }: Props) => {
  if (tipoPagina === 'home') {
    return (
      <Container tipoPagina={tipoPagina}>
        <div className="container">
          <List tipoPagina={tipoPagina}>
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
          </List>
        </div>
      </Container>
    )
  }
  else {
    return (
      <Container tipoPagina={tipoPagina}>
        <div className="container">
          <List tipoPagina={tipoPagina}>
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
          </List>
        </div>
      </Container>
    )
  }
}

export default ProductsList
