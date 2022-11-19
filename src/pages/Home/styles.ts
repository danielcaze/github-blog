import styled from 'styled-components'

export const HomeContent = styled.div`
  margin-top: 7.6rem;
  display: flex;
  flex-direction: column;
  gap: 4.8rem;

  header {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;

    div {
      display: flex;
      justify-content: space-between;
      align-items: center;

      h2 {
        color: ${({ theme }) => theme.colors['base-subtitle']};
        font-size: ${({ theme }) => theme.fonts['title-s']};
        line-height: 1.6;
      }

      span {
        color: ${({ theme }) => theme.colors['base-span']};
        font-size: ${({ theme }) => theme.fonts['text-s']};
        line-height: 1.6;
      }
    }
  }

  main {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 3.2rem;
  }
`
