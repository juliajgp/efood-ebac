import styled from 'styled-components'

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  background-color: rgba(255, 235, 217, 1);
  padding: 40px;
  height: 300px;

  p {
    color: rgba(230, 103, 103, 1);
    text-align: center;
    font-weight: 400px;
    font-size: 10px;
  }
`

export const SocialMedia = styled.div`
  display: flex;
  gap: 8px;
`