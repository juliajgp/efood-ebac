import styled from 'styled-components'

import { Props } from '.'
import { breakpoints, colors } from '../../styles'
import { Card, Class } from '../Restaurant/styles'

export const Container = styled.section<
  Omit<Props, 'name' | 'games'>
>`
  display: flex !important;
  justify-content: center !important;


  ${Card} {
    background-color: ${(props) =>
      props.tipopagina === 'home' ? colors.white : colors.coral};

  ${Class} {
    display: ${(props) =>
      props.tipopagina === 'home' ? 'flex' : 'none'};
  }
`

export const List = styled.ul<
  Omit<Props, 'name' | 'games'>
>`
  display: grid;
  grid-template-columns: ${(props) =>
      props.tipopagina === 'home' ? '1fr 1fr' : '1fr 1fr 1fr'};
  gap: ${(props) =>
      props.tipopagina === 'home' ? '80px' : '32px'};
  margin-top: 20px;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`