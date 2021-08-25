import styled from 'styled-components'
import logo from '../../images/logo.png' 

const Container = styled.header`
  width: 100%;
  height: 100px;
  background-color: #ff0000;
  display: flex;
  align-items: center;
  justify-content: space-around;

  .logo {
    width: 10%;
  }
`

export default function Header() {
  return (
    <Container>
      <img src={logo} alt="Logo da Pokedex" className="logo" />
    </Container>
  )
}