import styled from 'styled-components'

import { Props } from '.'

export const TagContainer = styled.div<Props>`
  background-color: rgb(230, 103, 103);
  text-transform: capitalize;
  color: white;
  font-size: ${(props) => (props.size === 'big' ? '16px' : '12px')};
  font-weight: bold;
  padding: ${(props) => (props.size === 'big' ? '8px 16px' : '6px 8px')};
  display: inline-block;
`
