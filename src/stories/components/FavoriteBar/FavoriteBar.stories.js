import React from 'react'
import FavoriteBar from '../../../components/FavoriteBar'

export default {
  title: 'FavoriteBar/Bar',
  component: FavoriteBar,
  argTypes: {
    list: {
      name: 'Pokémons colocados nos cards (nome, img)'
    }
  }
}

const Template = (args) => <FavoriteBar {...args} />

export const Default = Template.bind({})
Default.args = {
  list: [
    {
      name: "Pikachu",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
    },
    {
      name: "Charmander",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png"
    },
    {
      name: "Eevee",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/133.png"
    },
    {
      name: "Articuno",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/144.png"
    },
    {
      name: "Blastoise",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png"
    },
    {
      name: "Rapidash",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/78.png"
    },
  ]
}