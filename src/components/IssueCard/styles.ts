import styled from 'styled-components'

export const IssueCardContainer = styled.a`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  max-width: 416px;
  max-height: 260px;
  padding: 3.2rem;
  border-radius: 10px;

  border: 1px solid transparent;
  background: ${({ theme }) => theme.colors['base-post']};

  cursor: pointer;

  div {
    display: flex;
    justify-content: space-between;

    h3 {
      color: ${({ theme }) => theme.colors['base-title']};
      font-size: ${({ theme }) => theme.fonts['title-m']};
      line-height: 1.6;
    }

    time {
      color: ${({ theme }) => theme.colors['base-span']};
      font-size: ${({ theme }) => theme.fonts['text-s']};
      line-height: 1.6;
      min-width: fit-content;
    }
  }

  p {
    color: ${({ theme }) => theme.colors['base-text']};
    font-size: ${({ theme }) => theme.fonts['text-m']};
    line-height: 1.6;
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors['base-label']};
    transition: border-color 0.2s;
  }

  @media (min-width: 1440px) {
    max-width: 100%;
  }
`
