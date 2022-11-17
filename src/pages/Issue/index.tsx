import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faChevronLeft,
  faCalendarDay,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { Link, useLocation } from 'react-router-dom'
import { reposApi } from '../../lib/api'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import * as S from './styles'

interface IssueData {
  body: string
  title: string
  html_url: string
  comments: number
  user: {
    login: string
  }
}

export function IssuePage() {
  const [issueData, setIssueData] = useState<IssueData | null>(null)
  const { search } = useLocation()

  const query = new URLSearchParams(search)
  const issueId = query.get('id')

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
                  <FontAwesomeIcon icon={faCalendarDay} /> <span>Ha 1 dia</span>
                </S.SummaryFooterItem>
                <S.SummaryFooterItem>
                  <FontAwesomeIcon icon={faComment} />{' '}
                  <span>{issueData.comments} comentarios</span>
                </S.SummaryFooterItem>
              </S.SummaryFooter>
            </div>
          </S.IssueSummary>
          <S.IssueContent>
            <ReactMarkdown
              children={issueData.body} // eslint-disable-line
              components={{
                code({ node, inline, className, children, ...props }) {
                  const match = /language-(\w+)/.exec(className || '')
                  return !inline && match ? (
                    <SyntaxHighlighter
                      children={String(children).replace(/\n$/, '')} //eslint-disable-line
                      style={dracula as any}
                      language={match[1]}
                      PreTag="div"
                      {...props}
                    />
                  ) : (
                    <code className={className} {...props}>
                      {children}
                    </code>
                  )
                },
              }}
            />
          </S.IssueContent>
        </S.IssueContainer>
      ) : (
        <></>
      )}
    </>
  )
}
