import styled from 'styled-components'

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

    a,
    button {
      color: ${({ theme }) => theme.colors.blue};
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 0.8rem;
      font-size: ${({ theme }) => theme.fonts.link};
      line-height: 1.6;
      background: transparent;
      border: 0;

      cursor: pointer;

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

  @media (max-width: 580px) {
    flex-direction: column;
    align-items: center;
  }
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

  span,
  time {
    color: ${({ theme }) => theme.colors['base-subtitle']};
  }
`
