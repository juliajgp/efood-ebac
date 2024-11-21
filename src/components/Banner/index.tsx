import logo from '../../assets/images/logo.png'
import { BannerContainer } from './styles'

const Banner = () => {
  return (
    <BannerContainer>
      <div>
        <img src={logo} alt="EFOOD" />
      </div>
      <h1>
        Viva experiências gastronômicas<br />no conforto da sua casa
      </h1>
    </BannerContainer>
  )
}

export default Banner