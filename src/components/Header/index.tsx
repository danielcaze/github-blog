import { Link } from 'react-router-dom'
import Logo from '../../assets/Logo.png'
import * as S from './styles'

export function Header() {
  return (
    <S.HeaderContainer>
      <Link to="/">
        <img src={Logo} alt="" />
      </Link>
    </S.HeaderContainer>
  )
}
