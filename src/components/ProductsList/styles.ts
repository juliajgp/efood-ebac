import styled from 'styled-components'

import { Props } from '.'

export const Container = styled.section<
  Omit<Props, 'name' | 'games'>
>`
  padding: 32px 0;
  display: flex !important;
  justify-content: center !important;
  
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  margin-top: 40px;
`
