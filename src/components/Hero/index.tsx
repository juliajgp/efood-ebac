import logo from '../../assets/images/logo.png'
import { HeroContainer } from './styles'

const Hero = () => {
  return (
    <HeroContainer>
      <div>
        <img src={logo} alt="EFOOD" />
      </div>
      <h1>
        Viva experiências gastronômicas<br />no conforto da sua casa
      </h1>
    </HeroContainer>
  )
}

export default Hero