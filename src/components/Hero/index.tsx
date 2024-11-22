import * as S from './styles'

export type Props = {
  tipo?: string
  titulo?: string
  capa?: string
}

const Hero = ({tipo, titulo, capa}: Props) => {
  return (
    <S.BannerContainer>
      <S.Banner style={{ backgroundImage: `url(${capa})` }}>
      </S.Banner>
      <S.Infos>
        <p>{tipo}</p>
        <h1>{titulo}</h1>
      </S.Infos>
    </S.BannerContainer>
  )
}

export default Hero
