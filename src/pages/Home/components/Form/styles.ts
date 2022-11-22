import styled from 'styled-components'

export const InputContainer = styled.input.attrs({
  type: 'text',
  placeholder: 'Buscar counteúdo',
})`
  width: 100%;
  padding: 1.2rem 1.6rem;
  background: ${({ theme }) => theme.colors['base-input']};
  border: 1px solid ${({ theme }) => theme.colors['base-border']};
  color: ${({ theme }) => theme.colors['base-text']};
  font-size: ${({ theme }) => theme.fonts['text-m']};
  line-height: 1.6;
  border-radius: 6px;

  transition: border-color 0.2s;

  &::placeholder {
    color: ${({ theme }) => theme.colors['base-label']};
  }

  &::focus {
    border-color: ${({ theme }) => theme.colors.blue};
  }
`
