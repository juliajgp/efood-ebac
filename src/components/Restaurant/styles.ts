import styled from 'styled-components'
import { TagContainer } from '../Tag/styles'
import { Link } from 'react-router-dom'

export const Card = styled(Link)`
  background-color: white;
  border: 1px solid rgb(230, 103, 103);
  position: relative;
  text-decoration: none;
  color: white;
  display: block;
  height: 100%;
  width: 472px;

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
`

export const Title = styled.h3`
  color: rgb(230, 103, 103);
  padding: 3px 8px;
  font-weight: bold;
  font-size: 16px;
  display: block;
  margin-top: 16px;
`

export const Description = styled.p`
  color: rgb(230, 103, 103);
  padding: 0 8px;
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin: 16px 0 24px;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`