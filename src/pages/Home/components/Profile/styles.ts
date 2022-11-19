import styled from 'styled-components'

export const SummaryContainer = styled.div`
  width: 100%;
  padding: 3.2rem 4rem;
  margin-top: -88px;

  display: flex;
  align-items: center;
  gap: 3.2rem;

  border-radius: 10px;

  background-color: ${({ theme }) => theme.colors['base-profile']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  img {
    border-radius: 8px;
    max-width: 14.8rem;
    max-height: 14.8rem;
  }
`

export const SummaryInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  flex: 1;

  > div {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;

    height: 100%;
  }

  @media (min-width: 1440px) {
    gap: 6.5rem;

    > div {
      gap: initial;
      justify-content: space-between;
    }
  }
`

export const SummaryHeader = styled.header`
  display: flex;
  justify-content: space-between;

  strong {
    color: ${({ theme }) => theme.colors['base-title']};
    font-size: ${({ theme }) => theme.fonts['title-l']};
    line-height: 1.3;
  }

  a {
    color: ${({ theme }) => theme.colors.blue};
    font-size: ${({ theme }) => theme.fonts.link};
    line-height: 1.6;
    border-bottom: 1px solid transparent;

    display: flex;
    align-items: center;
    gap: 0.8rem;

    text-decoration: none;

    svg {
      line-height: 0;
      margin-top: -2.5px;
    }

    &:hover,
    &:focus {
      border-bottom-color: ${({ theme }) => theme.colors.blue};
      transition: border-color 0.2s;
    }
  }
`

export const SummaryContent = styled.main`
  max-width: 612px;
  overflow: hidden;
  text-overflow: ellipsis;
  p {
    color: ${({ theme }) => theme.colors['base-text']};
    font-size: ${({ theme }) => theme.fonts['text-m']};
    line-height: 1.6;
  }

  @media (min-width: 1440px) {
    max-width: initial;
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

  font-size: ${({ theme }) => theme.fonts['text-m']};
  line-height: 1.6;

  svg {
    color: ${({ theme }) => theme.colors['base-label']};
  }

  span {
    color: ${({ theme }) => theme.colors['base-subtitle']};
  }
`
