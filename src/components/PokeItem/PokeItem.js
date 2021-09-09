import React from 'react'
import { Card, PokeImage, PokeName, Content, PokeId } from './styles'
import FavButton from '../FavButton'

function PokeItem({ name, id, img, isSelected }) {
  return (
    <Card>
      <PokeImage src={img} alt={`Imagem do ${name}`} />
      <PokeName>{name}</PokeName>
      <Content>
        <PokeId>{id}</PokeId>
        <FavButton isSelected={isSelected} />
      </Content>
    </Card>
  )
}

export default PokeItem