import { useCallback, useEffect, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { IssueCard } from '../../components/IssueCard'
import { InputComponent } from './components/Input'
import { handleSearch } from '../../api'
import * as S from './styles'
import { Profile } from './components/Profile'

interface IssueInterface {
  id: string
  title: string
  body: string
  number: number
  created_at: string
}

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormType = z.infer<typeof searchFormSchema>

export function HomePage() {
  const [isLoading, setIsLoading] = useState(true)
  const [issues, setIssues] = useState<IssueInterface[]>([])

  const searchForm = useForm<SearchFormType>({
    resolver: zodResolver(searchFormSchema),
  })

  const { handleSubmit } = searchForm

  async function onSubmit(data: SearchFormType) {
    await getIssues(data.query)
  }

  const getIssues = useCallback(
    async (query: string = '') => {
      try {
        setIsLoading(true)
        const { items } = await handleSearch(query)
        setIssues(items)
      } catch (error) {
        console.error(error)
      } finally {
        setIsLoading(false)
      }
    },
    [issues],
  )

  useEffect(() => {
    getIssues()
  }, [])

  return (
    <>
      {isLoading ? (
        <></>
      ) : (
        <>
          <Profile />
          <S.HomeContent>
            <header>
              <div>
                <h2>Publicações</h2>
                <span>{issues.length} publicações</span>
              </div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <FormProvider {...searchForm}>
                  <InputComponent />
                </FormProvider>
              </form>
            </header>
            <main>
              {issues.map((issue) => {
                return <IssueCard key={issue.id} issue={issue} />
              })}
            </main>
          </S.HomeContent>
        </>
      )}
    </>
  )
}
