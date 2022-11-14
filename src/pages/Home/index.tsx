import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IssueCard } from '../../components/IssueCard'
import { InputComponent } from './components/Input'
import * as S from './styles'

export function HomePage() {
  return (
    <S.HomeContainer>
      <S.SummaryContainer>
        <img src="https://github.com/proccedure-caze.png" alt="" />
        <S.SummaryInfo>
          <div>
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
          </div>
          {/* Gap to this component (v) is wrong, right now is 8px but it needs to be 24px */}
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
      <S.HomeContent>
        <header>
          <div>
            <h2>Publicações</h2>
            <span>6 publicações</span>
          </div>
          <InputComponent />
        </header>
        <main>
          {[1, 2, 3, 4].map((post) => (
            <IssueCard key={post} />
          ))}
        </main>
      </S.HomeContent>
    </S.HomeContainer>
  )
}
