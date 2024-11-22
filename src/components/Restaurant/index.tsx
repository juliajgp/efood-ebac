import Tag from '../Tag'

import * as S from './styles'
import estrela from '../../assets/images/estrela.png'

type Props = {
  titulo: string
  tipo: string
  descricao: string
  capa: string
  avaliacao: number
  destacado: boolean
  id: number
}

const Restaurant = ({
  titulo,
  tipo,
  descricao,
  capa,
  avaliacao,
  destacado,
  id
}: Props) => {
  const lowerTitle = (text: string) => {
    return text.replace(/\s+/g, "").toLowerCase()
  }

  return (
    <S.Card
      title={`Clique aqui para ver mais detalhes do restaurante: ${titulo}`}
      to={`/restaurante/${id}`}
    >
      <img src={capa} alt={titulo} />
      <div className='titulo-class'>
        <S.Title>{titulo}</S.Title>
        <S.Class>
          {avaliacao}
          <img src={estrela} />
        </S.Class>
      </div>
      <S.Infos>
        {destacado ? <Tag>Destaque do dia</Tag> : ''}
        <Tag>{tipo}</Tag>
      </S.Infos>
      <S.Description>{descricao}</S.Description>
      <Tag>Saiba Mais</Tag>
    </S.Card>
  )
}

export default Restaurant
