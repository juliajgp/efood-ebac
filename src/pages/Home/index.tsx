import ProductsList from '../../components/ProductsList'

import spaghetti from '../../assets/images/spaghetti.png'
import sushi from '../../assets/images/sushi.png'
import Hero from '../../components/Hero'

const restaurants: Game[] = [
    {
        id: 1,
        description:
          'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
        name: 'Hioki Sushi',
        infos: ['Destaque da semana', 'Japonesa'],
        classif: 4.9,
        image: sushi
    },
    {
      id: 2,
      description:
        'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
      name: 'La Dolce Vita Trattoria',
      infos: ['Italiana'],
      classif: 4.6,
      image: spaghetti
    },
    {
      id: 3,
      description:
        'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
      name: 'La Dolce Vita Trattoria',
      infos: ['Italiana'],
      classif: 4.6,
      image: spaghetti
    },
    {
      id: 4,
      description:
        'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
      name: 'La Dolce Vita Trattoria',
      infos: ['Italiana'],
      classif: 4.6,
      image: spaghetti
    },
    {
      id: 5,
      description:
        'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
      name: 'La Dolce Vita Trattoria',
      infos: ['Italiana'],
      classif: 4.6,
      image: spaghetti
    },
    {
      id: 6,
      description:
        'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
      name: 'La Dolce Vita Trattoria',
      infos: ['Italiana'],
      classif: 4.6,
      image: spaghetti
    },
  ]

const Home = () => {
  return (
    <>
      <Hero />
      <ProductsList
        games={restaurants}
        tipoPagina="home"
      />
    </>
  )
}

export default Home
