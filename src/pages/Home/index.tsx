import ProductsList from '../../components/ProductsList'
import Banner from '../../components/Banner'

import { useGetRestaurantsQuery } from '../../services/api'


const Home = () => {
  const { data: restaurants } = useGetRestaurantsQuery()

  return (
    <>
      <Banner />
      <ProductsList
        restaurantes={restaurants}
        tipopagina="home"
      />
    </>
  )
}

export default Home
