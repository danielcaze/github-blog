import Logo from '../../assets/Logo.png'
import * as S from './styles'

export function Header() {
  return (
    <S.HeaderContainer>
      <img src={Logo} alt="" />
    </S.HeaderContainer>
  )
}
