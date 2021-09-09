import React from 'react'
import FavoriteItem from '../../../components/FavoriteItem'

export default {
  title: 'FavoriteBar/Item',
  component: FavoriteItem,
  argTypes: {
    name: {
      name: 'Nome do Pokémon'
    },
    image: {
      name: 'URL da imagem'
    }
  }
}

const Template = (args) => <FavoriteItem {...args} />

export const Default = Template.bind({})
Default.args = {
  name: 'Articuno',
  image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/144.png'
}