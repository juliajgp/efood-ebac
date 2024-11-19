import logo from '../../assets/images/logo.png'
import { FooterContainer, SocialMedia } from './styles'
import facebook from '../../assets/images/facebook.png'
import instagram from '../../assets/images/instagram.png'
import twitter from '../../assets/images/twitter.png'

const Footer = () => {
  return (
    <FooterContainer>
      <div>
        <img src={logo} alt="EFOOD" />
      </div>
      <SocialMedia>
        <img src={facebook}></img>
        <img src={instagram}></img>
        <img src={twitter}></img>
      </SocialMedia>
      <p>
        A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade<br />dos produtos é toda do estabelecimento contratado. 
      </p>
    </FooterContainer>
  )
}

export default Footer