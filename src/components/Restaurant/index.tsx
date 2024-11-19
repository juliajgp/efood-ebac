import Tag from '../Tag'

import * as S from './styles'

type Props = {
  title: string
  infos: string[]
  description: string
  image: string
}

const Restaurant = ({
  title,
  infos,
  description,
  image,
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
      <S.Title>{title}</S.Title>
      <S.Infos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </S.Infos>
      <S.Description>{description}</S.Description>
      <div>
        <Tag>Saiba Mais</Tag>
      </div>
    </S.Card>
  )
}

export default Restaurant
