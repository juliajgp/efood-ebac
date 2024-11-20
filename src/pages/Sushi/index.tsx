import ProductsList from '../../components/ProductsList'

import pizza from '../../assets/images/pizza.png'
import Header from '../../components/Header'

const products: Game[] = [
    {
        id: 1,
        description:
          'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        name: 'Pizza Marguerita',
        infos: ['Destaque da semana', 'Japonesa'],
        classif: 4.9,
        image: pizza
    },
    {
      id: 2,
      description:
        'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
      name: 'Pizza Marguerita',
      infos: ['Destaque da semana', 'Japonesa'],
      classif: 4.9,
      image: pizza
  },
  {
    id: 3,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    name: 'Pizza Marguerita',
    infos: ['Destaque da semana', 'Japonesa'],
    classif: 4.9,
    image: pizza
},
{
  id: 4,
  description:
    'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
  name: 'Pizza Marguerita',
  infos: ['Destaque da semana', 'Japonesa'],
  classif: 4.9,
  image: pizza
},
  ]

const Sushi = () => {
  return (
    <>
      <Header />
      <ProductsList
        games={products}
        tipoPagina="perfil"
      />
    </>
  )
}

export default Sushi
