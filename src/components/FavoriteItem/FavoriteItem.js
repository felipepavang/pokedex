import React from 'react'
import { Card, Image, Title } from './styles'
import Button from '../RemoveButton'

function FavoriteItem({ name, image }) {
  return (
    <Card>
      <Image src={image}/>
      <Button />
      <Title>{name}</Title>
    </Card>
  )
}

export default FavoriteItem