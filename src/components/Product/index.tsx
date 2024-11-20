import Tag from '../Tag'

import * as S from './styles'

type Props = {
  title: string
  description: string
  image: string
}

const Product = ({
  title,
  description,
  image
}: Props) => {
  const lowerTitle = (text: string) => {
    return text.replace(/\s+/g, "").toLowerCase()
  }

  return (
    <S.Card
      title={`Clique aqui para ver mais detalhes do produto: ${title}`}
      to={`/${lowerTitle(title)}`}
    >
      <img src={image} alt={title} />
      <div className='titulo-class'>
        <S.Title>{title}</S.Title>
      </div>
      <S.Description>{description}</S.Description>
      <Tag>Adicionar ao Carrinho</Tag>
    </S.Card>
  )
}

export default Product
