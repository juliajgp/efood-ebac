import ProductsList from '../../components/ProductsList'
import Header from '../../components/Header'
import Hero from '../../components/Hero'

import { useParams } from 'react-router-dom'
import { useGetMenuQuery } from '../../services/api'

type RestaurantParams = {
  id: string
}

const Perfil = () => {
  const { id } = useParams() as RestaurantParams
  const { data: menu } = useGetMenuQuery(id)

  return (
    <>
      <Header  />
      <Hero 
        tipo={menu?.tipo}
        titulo={menu?.titulo}
        capa={menu?.capa}
      />
      <ProductsList
        tipoPagina="perfil"
        products={menu?.cardapio}
      />
    </>
  )
}

export default Perfil
