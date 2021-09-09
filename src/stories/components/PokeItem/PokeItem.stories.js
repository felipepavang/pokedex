import React from 'react'
import PokeItem from '../../../components/PokeItem'

export default {
  title: 'PokeList/Item',
  component: PokeItem,
  argTypes: {
    name: {
      name:'Nome do Pokémon'
    },
    id: {
      name: 'Número do Pokémon'
    },
    img: {
      name: 'URL da imagem'
    },
    isSelected: {
      name: 'Botão de favorito selecionado?'
    }
  }
}

const Template = (args) => <PokeItem {...args} />

export const Default = Template.bind({})
Default.args = {
  name: 'Pikachu',
  id: '#25',
  img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
  isSelected: true
}