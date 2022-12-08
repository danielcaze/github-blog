import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Nunito", sans-serif;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.blue};
  }

  html, body {
    font-size: 62.5%;
    --webkit-font-smoothing: antialiased;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors['base-profile']};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.blue};
  }
`
