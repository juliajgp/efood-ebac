import * as S from './styles'
import spaghetti from '../../assets/images/spaghetti.png'

const Hero = () => {
  return (
    <S.BannerContainer>
      <S.Banner style={{ backgroundImage: `url(${spaghetti})` }}>
      </S.Banner>
      <S.Infos>
        <p>Italiana</p>
        <h1>La Dolce Vita</h1>
      </S.Infos>
    </S.BannerContainer>
  )
}

export default Hero
