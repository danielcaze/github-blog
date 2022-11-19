import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { ScrollToTop } from '../../utils/ScrollToTop'
import * as S from './styles'

export function DefaultLayout() {
  return (
    <S.DefaultLayoutWrapper>
      <ScrollToTop />
      <Header />
      <S.OutletContainer>
        <Outlet />
      </S.OutletContainer>
    </S.DefaultLayoutWrapper>
  )
}
