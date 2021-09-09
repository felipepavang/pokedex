import React from 'react'
import FavButton from '../../../components/FavButton'

export default {
  title: 'PokeList/FavButton',
  component: FavButton,
  argTypes: {
    isSelected: {
      name: 'Botão favorito selecionado?'
    }
  }
}

const Template  = (args) => <FavButton {...args} />

export const Default = Template.bind({})
Default.args = {
  isSelected: true
}