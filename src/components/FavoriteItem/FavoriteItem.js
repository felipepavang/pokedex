import React from 'react'
import { Card, Image, Title } from './styles'

function FavoriteItem({ name, image }) {
  return (
    <Card>
      <Image src={image}/>
      <Title>{name}</Title>
    </Card>
  )
}

export default FavoriteItem