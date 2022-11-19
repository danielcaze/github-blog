import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useCallback, useEffect, useState } from 'react'
import { api } from '../../../../lib/api'
import * as S from './styles'

interface User {
  login: string
  followers: number
  company: string
  avatar_url: string
  html_url: string
  name: string
  bio: string
}

export function Profile() {
  const [user, setUser] = useState<User>({} as User)
  const [isLoading, setIsLoading] = useState(true)

  const getUserData = useCallback(async () => {
    try {
      setIsLoading(true)
      const { data } = await api.get('users/danielcaze')
      setUser(data)
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }, [user])

  useEffect(() => {
    getUserData()
  }, [])

  return (
    <>
      {isLoading ? (
        <></>
      ) : (
        <S.SummaryContainer>
          <img src={user.avatar_url} alt="" />
          <S.SummaryInfo>
            <div>
              <S.SummaryHeader>
                <strong>{user.name}</strong>
                <a href={user.html_url} target="_blank" rel="noreferrer">
                  <span>GITHUB</span>
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </a>
              </S.SummaryHeader>
              {/* How to make this text ellipsis in the end and do not overflow before it */}
              <S.SummaryContent>
                <p>{user.bio}</p>
              </S.SummaryContent>
            </div>
            {/* Gap to this component (v) is wrong, right now is 8px but it needs to be 24px */}
            <S.SummaryFooter>
              <S.SummaryFooterItem>
                <FontAwesomeIcon icon={faGithub} /> <span>{user.login}</span>
              </S.SummaryFooterItem>
              <S.SummaryFooterItem>
                <FontAwesomeIcon icon={faBuilding} />{' '}
                <span>{user.company}</span>
              </S.SummaryFooterItem>
              <S.SummaryFooterItem>
                <FontAwesomeIcon icon={faUserGroup} />{' '}
                <span>{user.followers} Seguidores</span>
              </S.SummaryFooterItem>
            </S.SummaryFooter>
          </S.SummaryInfo>
        </S.SummaryContainer>
      )}
    </>
  )
}
