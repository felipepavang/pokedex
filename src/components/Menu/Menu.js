import React from 'react'
import Container from './styles'

export default function Menu({ links }) {
  return (
    <Container>
      {links.map(link => <a href="#">{link}</a>)}
    </Container>
  )
}