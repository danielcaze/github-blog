import { useDate } from '../../hooks/useDate'
import * as S from './styles'

interface IssueCardProps {
  issue: {
    number: number
    title: string
    body: string
    created_at: string
  }
}

export function IssueCard({ issue }: IssueCardProps) {
  const { title, body, number, created_at: createdAt } = issue
  const { dateTime, dateTitle, creationDate } = useDate(createdAt)

  return (
    <S.IssueCardContainer to={`/issue?id=${number}`}>
      <div>
        <h3>{title}</h3>
        <time dateTime={dateTime} title={dateTitle}>
          {creationDate}
        </time>
      </div>
      <p>{body}</p>
    </S.IssueCardContainer>
  )
}
