import { useCallback, useEffect, useState } from 'react'
import { IssueCard } from '../../../../components/IssueCard'
import { handleSearch } from '../../../../api'
import * as S from './styles'
import { Form } from '../Form'

interface IssueInterface {
  id: string
  title: string
  body: string
  number: number
  created_at: string
}

export function Posts() {
  const [isLoading, setIsLoading] = useState(true)
  const [issues, setIssues] = useState<IssueInterface[]>([])

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
      <S.PostsContainer>
        <header>
          <div>
            <h2>Publicações</h2>
            <span>{issues.length} publicações</span>
          </div>
          <Form getIssues={getIssues} />
        </header>
        {isLoading ? (
          <></>
        ) : (
          <main>
            {issues.map((issue) => {
              return <IssueCard key={issue.id} issue={issue} />
            })}
          </main>
        )}
      </S.PostsContainer>
    </>
  )
}
