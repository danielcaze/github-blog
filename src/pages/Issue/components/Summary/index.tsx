import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faChevronLeft,
  faCalendarDay,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'
import { useDate } from '../../../../hooks/useDate'

import * as S from './styles'

interface SummaryProps {
  issue: {
    title: string
    html_url: string
    comments: number
    created_at: string
    user: {
      login: string
    }
  }
}

export function Summary({ issue }: SummaryProps) {
  const { dateTime, dateTitle, creationDate } = useDate(issue.created_at)
  const navigate = useNavigate()

  function goBack() {
    navigate(-1)
  }

  return (
    <S.IssueSummary>
      <header>
        <button onClick={goBack}>
          <FontAwesomeIcon icon={faChevronLeft} /> VOLTAR
        </button>
        <a href={issue.html_url} target="_blank" rel="noreferrer">
          VER NO GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>
      </header>
      <div>
        <main>
          <h1>{issue.title}</h1>
        </main>
        <S.SummaryFooter>
          <S.SummaryFooterItem>
            <FontAwesomeIcon icon={faGithub} /> <span>{issue.user.login}</span>
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
  )
}
