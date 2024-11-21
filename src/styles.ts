import { createGlobalStyle } from 'styled-components'

export const colors = {
  white: '#fff',
  black: '#111',
  green: '#10AC84',
  coral: '#e66767'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
    color: ${colors.coral};
  }

  body {
    background-color: rgba(255, 248, 242, 1);
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: ${breakpoints.desktop}) {
      max-width: 80%;
    }
  }
`
