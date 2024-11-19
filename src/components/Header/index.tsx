import logo from '../../assets/images/logo.png'
import { HeaderContainer } from './styles'

const Header = () => {
  return (
    <HeaderContainer>
      <div>
        <img src={logo} alt="EFOOD" />
      </div>
      <h1>
        Viva experiências gastronômicas<br />no conforto da sua casa
      </h1>
    </HeaderContainer>
  )
}

export default Header