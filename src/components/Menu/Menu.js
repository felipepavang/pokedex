import styled from 'styled-components'

const MenuContainer = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: space-around;

  a {
    text-decoration: none;
    font-size: 20px;
    color: white;
    transition: 0.3s ease-in-out;
  }

  a:hover {
    transform: scale(1.1)
  }
`

export default function Menu() {
  const links = [
    "Home",
    "Description"
  ]

  return (
    <MenuContainer>
      {links.map(link => <a href="#">{link}</a>)}
    </MenuContainer>
  )
}