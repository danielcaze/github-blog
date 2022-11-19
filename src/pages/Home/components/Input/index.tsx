import * as S from './styles'
import { InputHTMLAttributes } from 'react'
import { useFormContext } from 'react-hook-form'

export function InputComponent({
  ...rest
}: InputHTMLAttributes<HTMLInputElement>) {
  const { register } = useFormContext()
  return <S.InputContainer {...register('query')} />
}
