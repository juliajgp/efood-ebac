import styled from 'styled-components'

import fundo from '../../assets/images/Vector.png'

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  background-image: url(${fundo});
  padding: 40px;
  border-bottom: 1px solid #eee;
  height: 350px; //no layout original estava 384px

  h1 {
    color: rgba(230, 103, 103, 1);
    font-weight: 900;
    text-align: center;
    font-size: 36px;
  }
`