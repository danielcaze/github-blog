import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useCallback, useEffect, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { IssueCard } from '../../components/IssueCard'
import { InputComponent } from './components/Input'
import { handleSearch } from '../../api'
import * as S from './styles'
import { usersApi } from '../../lib/api'

interface IssueInterface {
  id: string
  title: string
  body: string
  number: number
  created_at: string
}

interface User {
  login: string
  followers: number
  company: string
  avatar_url: string
  html_url: string
  name: string
  bio: string
}

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormType = z.infer<typeof searchFormSchema>

export function HomePage() {
  const [user, setUser] = useState<User>({} as User)
  const [isLoading, setIsLoading] = useState(true)
  const [issues, setIssues] = useState<IssueInterface[]>([])

  const searchForm = useForm<SearchFormType>({
    resolver: zodResolver(searchFormSchema),
  })

  const { handleSubmit } = searchForm

  async function onSubmit(data: SearchFormType) {
    await getIssues(data.query)
  }

  useEffect(() => {
    async function getUserData() {
      setIsLoading(true)
      const { data } = await usersApi.get('danielcaze')
      setIsLoading(false)
      setUser(data)
    }
    getUserData()
  }, [])

  const getIssues = useCallback(
    async (query: string = '') => {
      try {
        setIsLoading(true)
        const { items } = await handleSearch(query)
        setIssues(items)
      } catch (error) {
        console.error(error)
      } finally {
        setIsLoading(false)
      }
    },
    [issues],
  )

  useEffect(() => {
    getIssues()
  }, [])

  return (
    <>
      {isLoading ? (
        <></>
      ) : (
        <S.HomeContainer>
          <S.SummaryContainer>
            <img src={user.avatar_url} alt="" />
            <S.SummaryInfo>
              <div>
                <S.SummaryHeader>
                  <strong>{user.name}</strong>
                  <a href={user.html_url}>
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
          <S.HomeContent>
            <header>
              <div>
                <h2>Publicações</h2>
                <span>{issues.length} publicações</span>
              </div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <FormProvider {...searchForm}>
                  <InputComponent />
                </FormProvider>
              </form>
            </header>
            <main>
              {issues.map((issue) => {
                return <IssueCard key={issue.id} issue={issue} />
              })}
            </main>
          </S.HomeContent>
        </S.HomeContainer>
      )}
    </>
  )
}
