import * as S from './styles'

interface IssueCardProps {
  issue: {
    title: string
  }
}

export function IssueCard({ issue }: IssueCardProps) {
  const { title } = issue
  return (
    <S.IssueCardContainer href="">
      <div>
        <h3>{title}</h3>
        <time dateTime="2022-11-10 10:50">Ha 1 dia</time>
      </div>
      <p>
        Programming languages all have built-in data structures, but these often
        differ from one language to another. This article attempts to list the
        built-in data structures available in
      </p>
    </S.IssueCardContainer>
  )
}
