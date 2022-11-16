import * as S from './styles'

interface InputComponentProps {
  queryChange(query: string): void
  query: string
}

export function InputComponent({ queryChange, query }: InputComponentProps) {
  return (
    <S.InputContainer
      onChange={(e) => queryChange(e.target.value)}
      value={query}
    />
  )
}
