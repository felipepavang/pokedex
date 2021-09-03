import React from 'react'
import Container from './styles'
import logo from '../../images/logo.svg' 
import Menu from '../Menu'

export default function Header() {
  return (
    <Container>
      <img src={logo} alt="Logo da Pokedex" className="logo" />
      <Menu />
    </Container>
  )
}