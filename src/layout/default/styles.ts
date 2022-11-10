import styled from 'styled-components'

export const DefaultLayoutWrapper = styled.div`
  background: ${({ theme }) => theme.colors['base-background']};
`

export const OutletContainer = styled.div`
  max-width: 1728px;
  margin-inline: auto;
  padding-bottom: 23.4rem;

  @media (max-width: 1440px) {
    max-width: 864px;
  }
`
