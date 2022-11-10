import styled from 'styled-components'
import Cover from '../../assets/Cover.png'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;

  width: 100vw;
  height: 296px;

  background-image: url(${Cover});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  img {
    margin-block: 6.4rem auto;
    object-fit: cover;
  }
`
