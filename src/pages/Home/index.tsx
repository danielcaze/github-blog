import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as S from './styles'

export function Home() {
  return (
    <div>
      <S.SummaryContainer>
        <img src="https://github.com/proccedure-caze.png" alt="" />
        <S.SummaryInfo>
          <S.SummaryHeader>
            <strong>Camero Williamson</strong>
            <a href="">
              <span>GITHUB</span>
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </S.SummaryHeader>
          {/* How to make this text ellipsis in the end and do not overflow before it */}
          <S.SummaryContent>
            <p>
              Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
              viverra massa quam dignissim aenean malesuada suscipit. Nunc,
              volutpat pulvinar vel mass.
            </p>
          </S.SummaryContent>
          <S.SummaryFooter>
            <S.SummaryFooterItem>
              <FontAwesomeIcon icon={faGithub} /> <span>danielcaze</span>
            </S.SummaryFooterItem>
            <S.SummaryFooterItem>
              <FontAwesomeIcon icon={faBuilding} /> <span>Proccedure</span>
            </S.SummaryFooterItem>
            <S.SummaryFooterItem>
              <FontAwesomeIcon icon={faUserGroup} /> <span>24 Seguidores</span>
            </S.SummaryFooterItem>
          </S.SummaryFooter>
        </S.SummaryInfo>
      </S.SummaryContainer>
    </div>
  )
}
