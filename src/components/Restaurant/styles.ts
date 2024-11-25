import styled from 'styled-components'
import { TagContainer } from '../Tag/styles'
import { Link } from 'react-router-dom'
import { colors } from '../../styles'

export const Card = styled(Link)`
  background-color: white;
  border: 1px solid ${colors.coral};
  position: relative;
  text-decoration: none;
  color: ${colors.coral};
  display: block;
  height: 100%;
  max-width: 480px;

  img {
    display: block;
    width: 100%;
    height: 250px;
    object-fit: cover;
  }

  ${TagContainer} {
    margin-left: 8px;
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
  color: ${colors.coral};
`

export const Description = styled.p`
  padding: 0 8px;
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin: 16px 0 24px;
  color: ${colors.coral};
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  color: ${colors.coral};
`

export const Class = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 20px;
    height: 20px;
    margin: 0 8px;
  }
`