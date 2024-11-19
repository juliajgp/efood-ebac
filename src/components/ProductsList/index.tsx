import Restaurant from '../Restaurant'
import React from 'react'

import { Container, List } from './styles'

export type Props = {
  games: Game[]
}

const ProductsList = ({ games }: Props) => {
  return (
    <Container>
      <div className="container">
        <List>
          {games.map((game) => (
            <Restaurant
              key={game.id}
              infos={game.infos}
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

export default ProductsList
