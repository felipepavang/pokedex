import React from 'react'
import MenuContainer from './styles'

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