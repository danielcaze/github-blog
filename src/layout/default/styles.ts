import styled from 'styled-components'

export const DefaultLayoutWrapper = styled.div`
  background: ${({ theme }) => theme.colors['base-background']};
`

export const OutletContainer = styled.div`
  max-width: 1728px;
  min-height: calc(100vh - 296px + 88px);
  margin-inline: auto;
  padding-bottom: 23.4rem;

  z-index: 1;

  @media (min-width: 768px) {
    padding-inline: 10rem;
  }

  @media (max-width: 1440px) {
    max-width: 864px;
  }
`
