import React from 'react'
import { Card, PokeImage, PokeName, Content, PokeId, FavButton, FavImage } from './styles'

export default function PokeItem({ name, id, img, favoriteImg }) {
  return (
    <Card>
      <PokeImage src={img} alt={`Imagem do ${name}`} />
      <PokeName>{name}</PokeName>
      <Content>
        <PokeId>{id}</PokeId>
        <FavButton><FavImage src={favoriteImg} alt='Botão de favorito' /></FavButton>
      </Content>
    </Card>
  )
}