import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

import fundo from '../../assets/images/Vector.png'

export const Links = styled.ul`
  display: flex;
  margin-left: 40px;

  @media (max-width: ${breakpoints.tablet}) {
    margin-left: 0;
    display: block;
  }
`

export const HeaderBar = styled.header`
  background-image: url(${fundo});
  padding: 24px;

  a,
  span {
    text-decoration: none;
    font-weight: bold;
  }

  h1 {
    line-height: 0;
  }

  .logo {
    img {
      height: 58px;
    }
  }
`

export const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  //padding: 0 171px;

  > div {
    display: flex;
    align-items: center;

    @media (max-width: ${breakpoints.tablet}) {

      ${Links} {
        display: none;
      }
    }
  }
`

export const NavMobile = styled.nav`
  display: none;

  &.is-open {
    display: block;
  }
`

export const LinkItem = styled.li`
  margin-right: 16px;

  @media (max-width: ${breakpoints.tablet}) {
    margin-right: 0;

    a {
      padding: 16px 0;
      display: block;
      text-align: center;
    }
  }
`

export const CartButton = styled.span`
  display: flex;
  cursor: pointer;

  @media (max-width: ${breakpoints.tablet}) {
    span {
      display: none;
    }
  }
`