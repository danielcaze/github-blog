import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faChevronLeft,
  faCalendarDay,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as S from './styles'

export function IssuePage() {
  return (
    <S.IssueContainer>
      <S.IssueSummary>
        <header>
          <a href="">
            <FontAwesomeIcon icon={faChevronLeft} /> VOLTAR
          </a>
          <a href="">
            VER NO GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </header>
        <div>
          <main>
            <h1>JavaScript data types and data structures</h1>
          </main>
          <S.SummaryFooter>
            <S.SummaryFooterItem>
              <FontAwesomeIcon icon={faGithub} /> <span>danielcaze</span>
            </S.SummaryFooterItem>
            <S.SummaryFooterItem>
              <FontAwesomeIcon icon={faCalendarDay} /> <span>Ha 1 dia</span>
            </S.SummaryFooterItem>
            <S.SummaryFooterItem>
              <FontAwesomeIcon icon={faComment} /> <span>5 comentarios</span>
            </S.SummaryFooterItem>
          </S.SummaryFooter>
        </div>
      </S.IssueSummary>
    </S.IssueContainer>
  )
}
