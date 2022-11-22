import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import * as S from './styles'

interface FormProps {
  getIssues(query: string): Promise<void>
}

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormType = z.infer<typeof searchFormSchema>

export function Form({ getIssues }: FormProps) {
  const searchForm = useForm<SearchFormType>({
    resolver: zodResolver(searchFormSchema),
  })

  const { handleSubmit, register } = searchForm

  async function onSubmit(data: SearchFormType) {
    await getIssues(data.query)
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <S.InputContainer {...register('query')} />
    </form>
  )
}
