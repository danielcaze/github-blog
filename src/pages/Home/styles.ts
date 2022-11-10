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

  img {
    border-radius: 8px;
    max-width: 14.8rem;
    max-height: 14.8rem;
  }
`

export const SummaryInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem 2.4rem;
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

    display: flex;
    align-items: center;
    gap: 0.8rem;

    text-decoration: none;
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
