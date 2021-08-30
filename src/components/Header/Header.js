import styled from 'styled-components'
import logo from '../../images/logo.svg' 
import Menu from '../Menu/Menu'

const Container = styled.header`
  width: 100%;
  height: 100px;
  background-color: #FF1C1C;
  display: flex;
  align-items: center;
  justify-content: space-around;

  .logo {
    width: 12%;
  }
`

export default function Header() {
  return (
    <Container>
      <img src={logo} alt="Logo da Pokedex" className="logo" />
      <Menu />
    </Container>
  )
}