import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faChevronLeft,
  faCalendarDay,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { formatDistanceToNow, format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { reposApi } from '../../lib/api'
import Markdown from 'markdown-to-jsx'
import * as S from './styles'

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
  const [issueData, setIssueData] = useState<IssueData | null>(null)
  const { search } = useLocation()

  const query = new URLSearchParams(search)
  const issueId = query.get('id')

  const date = issueData ? new Date(issueData?.created_at) : new Date()
  const formattedCreationDate = formatDistanceToNow(date, {
    locale: ptBR,
    addSuffix: true,
  })
  const formattedDateTitle = format(date, "dd 'de' MMMM 'de' yyyy 'às' HH:mm", {
    locale: ptBR,
  })
  const formattedDatetime = format(date, 'yyyy-MM-dd HH:mm', { locale: ptBR })

  useEffect(() => {
    async function getIssueData() {
      const { data } = await reposApi.get(
        `/danielcaze/github-blog/issues/${issueId}`,
      )
      setIssueData(data)
    }
    if (issueId) {
      getIssueData()
    }
  }, [issueId])

  console.log(issueData)
  return (
    <>
      {issueData ? (
        <S.IssueContainer>
          <S.IssueSummary>
            <header>
              <Link to="/">
                <FontAwesomeIcon icon={faChevronLeft} /> VOLTAR
              </Link>
              <a href={issueData.html_url}>
                VER NO GITHUB{' '}
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>
            </header>
            <div>
              <main>
                <h1>{issueData.title}</h1>
              </main>
              <S.SummaryFooter>
                <S.SummaryFooterItem>
                  <FontAwesomeIcon icon={faGithub} />{' '}
                  <span>{issueData.user.login}</span>
                </S.SummaryFooterItem>
                <S.SummaryFooterItem>
                  <FontAwesomeIcon icon={faCalendarDay} />{' '}
                  <time dateTime={formattedDatetime} title={formattedDateTitle}>
                    {formattedCreationDate}
                  </time>
                </S.SummaryFooterItem>
                <S.SummaryFooterItem>
                  <FontAwesomeIcon icon={faComment} />{' '}
                  <span>{issueData.comments} comentarios</span>
                </S.SummaryFooterItem>
              </S.SummaryFooter>
            </div>
          </S.IssueSummary>
          <S.IssueContent>
            <Markdown>{issueData.body}</Markdown>
          </S.IssueContent>
        </S.IssueContainer>
      ) : (
        <></>
      )}
    </>
  )
}
