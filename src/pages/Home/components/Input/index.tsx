import * as S from './styles'
import { useFormContext } from 'react-hook-form'

export function InputComponent() {
  const { register } = useFormContext()
  return <S.InputContainer {...register('query')} />
}
