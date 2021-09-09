import React from 'react'
import MenuContainer from './styles'

export default function Menu({ links }) {
  return (
    <MenuContainer>
      {links.map(link => <a href="#">{link}</a>)}
    </MenuContainer>
  )
}