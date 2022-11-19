import { Outlet, ScrollRestoration } from 'react-router-dom'
import { Header } from '../../components/Header'
import * as S from './styles'

export function DefaultLayout() {
  return (
    <S.DefaultLayoutWrapper>
      <Header />
      <S.OutletContainer>
        <Outlet />
      </S.OutletContainer>
      <ScrollRestoration />
    </S.DefaultLayoutWrapper>
  )
}
