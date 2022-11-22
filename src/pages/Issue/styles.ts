import styled from 'styled-components'

export const IssueContent = styled.div`
  > div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 4rem 3.2rem;
    margin-bottom: 8rem;

    a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.blue};
    }

    p {
      color: ${({ theme }) => theme.colors['base-text']};
      font-size: ${({ theme }) => theme.fonts['text-m']};
    }

    img {
      width: 100%;
    }

    h1,
    h2,
    h3 {
      color: ${({ theme }) => theme.colors.blue};
      font-size: ${({ theme }) => theme.fonts['title-l']};
    }

    ul {
      list-style: inherit;
      padding-left: 1.5rem;
    }

    pre {
      background: ${({ theme }) => theme.colors['base-post']};
      padding: 1rem;

      code {
        font-family: 'FiraCode', monospace !important;
        line-height: 160% !important;
        font-size: ${({ theme }) => theme.fonts['text-m']};

        color: ${({ theme }) => theme.colors.danger};
      }
    }
  }
`
