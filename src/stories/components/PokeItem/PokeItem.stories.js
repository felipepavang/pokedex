import React from 'react'
import FavoriteButton from '../../../images/favorited.png'
import PokeItem from '../../../components/PokeItem/PokeItem'

export default {
  title: 'PokeList/Item',
  component: PokeItem
}

export const Component = () => <PokeItem name='Pikachu' id='#25' img='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png' favoriteImg={FavoriteButton}/>