import { formatDistanceToNow, format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
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
  const date = new Date(createdAt)
  const publishedDateFormatted = format(
    date,
    "d 'de' MMMM 'de' yyyy 'às' HH:mm",
    {
      locale: ptBR,
    },
  )
  const formattedDateTime = format(date, 'yyyy-MM-dd HH:mm', { locale: ptBR })

  return (
    <S.IssueCardContainer to={`/issue?id=${number}`}>
      <div>
        <h3>{title}</h3>
        <time dateTime={formattedDateTime} title={publishedDateFormatted}>
          {formatDistanceToNow(date, {
            addSuffix: true,
            locale: ptBR,
          })}
        </time>
      </div>
      <p>{body}</p>
    </S.IssueCardContainer>
  )
}
