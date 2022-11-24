import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const IssueCardContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  width: 100%;
  max-width: 100%;
  height: 260px;
  padding: 3.2rem;
  border-radius: 10px;

  border: 1px solid transparent;
  background: ${({ theme }) => theme.colors['base-post']};

  cursor: pointer;

  text-decoration: none;

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

  > p {
    color: ${({ theme }) => theme.colors['base-text']};
    font-size: ${({ theme }) => theme.fonts['text-m']};
    line-height: 1.6;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors['base-label']};
    transition: border-color 0.2s;
  }
`
