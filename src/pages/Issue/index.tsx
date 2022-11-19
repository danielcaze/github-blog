import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faChevronLeft,
  faCalendarDay,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useCallback, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { api } from '../../lib/api'
import Markdown from 'markdown-to-jsx'
import * as S from './styles'
import { useDate } from '../../hooks/useDate'

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

  const { dateTime, dateTitle, creationDate } = useDate(issue.created_at)
  const navigate = useNavigate()

  const query = new URLSearchParams(search)
  const issueId = query.get('id')

  function goBack() {
    navigate(-1)
  }

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
          <S.IssueSummary>
            <header>
              <button onClick={goBack}>
                <FontAwesomeIcon icon={faChevronLeft} /> VOLTAR
              </button>
              <a href={issue.html_url} target="_blank" rel="noreferrer">
                VER NO GITHUB{' '}
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>
            </header>
            <div>
              <main>
                <h1>{issue.title}</h1>
              </main>
              <S.SummaryFooter>
                <S.SummaryFooterItem>
                  <FontAwesomeIcon icon={faGithub} />{' '}
                  <span>{issue.user.login}</span>
                </S.SummaryFooterItem>
                <S.SummaryFooterItem>
                  <FontAwesomeIcon icon={faCalendarDay} />{' '}
                  <time dateTime={dateTime} title={dateTitle}>
                    {creationDate}
                  </time>
                </S.SummaryFooterItem>
                <S.SummaryFooterItem>
                  <FontAwesomeIcon icon={faComment} />{' '}
                  <span>{issue.comments} comentarios</span>
                </S.SummaryFooterItem>
              </S.SummaryFooter>
            </div>
          </S.IssueSummary>
          <S.IssueContent>
            <Markdown>{issue.body}</Markdown>
          </S.IssueContent>
        </>
      )}
    </>
  )
}
