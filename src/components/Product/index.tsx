import { useState } from 'react'
import Tag from '../Tag'

import * as S from './styles'

type Props = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

interface ModalState extends Produto {
  isVisible: boolean
}

const Product = ({
  foto,
  preco,
  id,
  nome,
  descricao,
  porcao
}: Props) => {
  const lowerTitle = (text: string) => {
    return text.replace(/\s+/g, "").toLowerCase()
  }

  /*
  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    type: 'image',
    url: ''
  })

  const closeModal = () => {
    setModal({
      isVisible: false,
      type: 'image',
      url: ''
    })
  }*/

  return (
    <S.Card
      title={`Clique aqui para ver mais detalhes do produto: ${nome}`}
      to={`/${lowerTitle(nome)}`}
    >
      <img src={foto} alt={nome} />
      <div className='titulo-class'>
        <S.Title>{nome}</S.Title>
      </div>
      <S.Description>{descricao}</S.Description>
      <Tag>Adicionar ao Carrinho</Tag>
    </S.Card>
  )
}

export default Product
