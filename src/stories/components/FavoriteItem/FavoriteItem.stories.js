import React from 'react'
import FavoriteItem from '../../../components/FavoriteItem'

export default {
  title: 'FavoriteBar/Item',
  component: FavoriteItem
}

export const Component = () => (
  <FavoriteItem
    name="Articuno"
    image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/144.png"
  />
)