import styled from 'styled-components'

export const IssueContainer = styled.div`
  min-height: calc(100vh - 296px - 234px + 88px);
`

export const IssueSummary = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors['base-profile']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  padding: 3.2rem;
  margin-top: -88px;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
      color: ${({ theme }) => theme.colors.blue};
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 0.8rem;
      font-size: ${({ theme }) => theme.fonts.link};
      line-height: 1.6;

      &:nth-child(2) svg {
        margin-top: -2.5px;
      }
    }
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;

    h1 {
      color: ${({ theme }) => theme.colors['base-title']};
      font-size: ${({ theme }) => theme.fonts['title-l']};
      line-height: 1.3;
    }
  }
`

export const SummaryFooter = styled.footer`
  display: flex;
  gap: 2.4rem;
`

export const SummaryFooterItem = styled.a`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  display: inline-block;

  font-size: ${({ theme }) => theme.fonts['text-m']};
  line-height: 1.6;

  svg {
    color: ${({ theme }) => theme.colors['base-label']};
  }

  span {
    color: ${({ theme }) => theme.colors['base-subtitle']};
  }
`

export const IssueContent = styled.div`
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

    > div {
      background: none !important;
      padding: 0 !important;
      margin: 0 !important;
      code {
        font-family: 'FiraCode', monospace !important;
        line-height: 160% !important;
      }
    }
  }
`
