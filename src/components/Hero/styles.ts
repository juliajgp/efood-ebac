import styled from 'styled-components'
import { colors, breakpoints } from '../../styles'

export const BannerContainer = styled.div`
  height: 280px;
`

export const Banner = styled.div`
  position: absolute;
  display: block;
  height: 280px;
  width: 100%;

  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;

  padding-top: 16px;
  
  @media (max-width: ${breakpoints.tablet}) {
    background-size: cover;
  }

  &::after {
    position: absolute;
    background-color: #000;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    content: '';
    opacity: 0.56;
  }

  .container {
    z-index: 1;
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
  }
`

export const Infos = styled.div`
  position: relative;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 30px 250px;

  h1, p {
    color: white;
  }
  
  h1 {
    font-weight: 900;
    font-size: 32px;
  }

  p {
    text-transform: capitalize;
    font-weight: 100 !important;
    font-size: 32px;
  }
`