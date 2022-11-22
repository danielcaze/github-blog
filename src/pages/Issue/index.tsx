import { useCallback, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { api } from '../../lib/api'
import Markdown from 'markdown-to-jsx'
import * as S from './styles'
import { Summary } from './components/Summary'

interface IssueData {
  body: string
  title: string
  html_url: string
  comments: number
  created_at: string
  user: {
    login: string
  }
}

export function IssuePage() {
  const [issue, setIssue] = useState<IssueData>({} as IssueData)
  const [isLoading, setIsLoading] = useState(true)

  const { search } = useLocation()
  const query = new URLSearchParams(search)
  const issueId = query.get('id')

  const getIssueData = useCallback(async () => {
    try {
      setIsLoading(true)
      const { data } = await api.get(
        `repos/danielcaze/github-blog/issues/${issueId}`,
      )
      setIssue(data)
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }, [issueId])

  useEffect(() => {
    getIssueData()
  }, [])

  return (
    <>
      {isLoading ? (
        <></>
      ) : (
        <>
          <Summary issue={issue} />
          <S.IssueContent>
            <Markdown>{issue.body}</Markdown>
          </S.IssueContent>
        </>
      )}
    </>
  )
}
