import * as S from './styles'

interface IssueCardProps {
  issue: {
    number: number
    title: string
    body: string
  }
}

export function IssueCard({ issue }: IssueCardProps) {
  const { title, body, number } = issue
  return (
    <S.IssueCardContainer to={`/issue?id=${number}`}>
      <div>
        <h3>{title}</h3>
        <time dateTime="2022-11-10 10:50">Ha 1 dia</time>
      </div>
      <p>{body}</p>
    </S.IssueCardContainer>
  )
}
