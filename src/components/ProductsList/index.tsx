import Product from '../Product'
import Restaurant from '../Restaurant'

import { Container, List } from './styles'

export type Props = {
  games: Game[]
  tipoPagina: 'home' | 'perfil'
}

const ProductsList = ({ tipoPagina, games }: Props) => {
  if (tipoPagina === 'home') {
    return (
      <Container tipoPagina={tipoPagina}>
        <div className="container">
          <List tipoPagina={tipoPagina}>
            {games.map((game) => (
              <Restaurant
                key={game.id}
                infos={game.infos}
                description={game.description}
                image={game.image}
                title={game.name}
                classif={game.classif}
              />
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
            {games.map((game) => (
              <Product
                key={game.id}
                description={game.description}
                image={game.image}
                title={game.name}
              />
            ))}
          </List>
        </div>
      </Container>
    )
  }
}

export default ProductsList
