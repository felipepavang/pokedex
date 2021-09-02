import React from 'react'
import { Card, PokeImage, PokeName, Content, PokeId } from './styles/styles'
import FavButton from '../FavButton/FavButton'

export default function PokeItem({ name, id, img }) {
  return (
    <Card>
      <PokeImage src={img} alt={`Imagem do ${name}`} />
      <PokeName>{name}</PokeName>
      <Content>
        <PokeId>{id}</PokeId>
        <FavButton isSelected={isSelected}></FavButton>
      </Content>
    </Card>
  )
}