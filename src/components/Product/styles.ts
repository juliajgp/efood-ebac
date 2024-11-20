import styled from 'styled-components'
import { TagContainer } from '../Tag/styles'
import { Link } from 'react-router-dom'
import { colors } from '../../styles'

export const Card = styled(Link)`
  background-color: ${colors.coral};
  color: white;
  position: relative;
  text-decoration: none;
  display: block;
  height: 100%;
  width: 320px;
  padding: 8px;

  img {
    display: block;
    width: 100%;
    height: 250px;
    object-fit: cover;
  }

  ${TagContainer} {
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    color: ${colors.coral};
  }
  
  div {
    margin-bottom: 4px;
  }
  
  .titulo-class {
    margin-top: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const Title = styled.h3`
  padding: 3px 8px;
  font-weight: bold;
  font-size: 16px;
  display: block;
  color: white;
`

export const Description = styled.p`
  padding: 0 8px;
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin: 16px 0 24px;
  color: white;
`