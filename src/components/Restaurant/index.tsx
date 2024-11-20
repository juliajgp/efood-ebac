import Tag from '../Tag'

import * as S from './styles'
import estrela from '../../assets/images/estrela.png'

type Props = {
  title: string
  infos: string[]
  description: string
  image: string
  classif: number
}

const Restaurant = ({
  title,
  infos,
  description,
  image,
  classif
}: Props) => {
  const lowerTitle = (text: string) => {
    return text.replace(/\s+/g, "").toLowerCase()
  }

  return (
    <S.Card
      title={`Clique aqui para ver mais detalhes do restaurante: ${title}`}
      to={`/${lowerTitle(title)}`}
    >
      <img src={image} alt={title} />
      <div className='titulo-class'>
        <S.Title>{title}</S.Title>
        <S.Class>
          {classif}
          <img src={estrela} />
        </S.Class>
      </div>
      <S.Infos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </S.Infos>
      <S.Description>{description}</S.Description>
      <Tag>Saiba Mais</Tag>
    </S.Card>
  )
}

export default Restaurant
