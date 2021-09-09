import React from 'react'
import PokeList from '../../../components/PokeList'

export default {
  title: 'PokeList/List',
  component: PokeList,
  argTypes: {
    list: {
      name: 'Pokémons colocados nos cards (nome, img, id)'
    }
  }
}

const Template = (args) => <PokeList {...args} />

export const Default = Template.bind({})
Default.args = {
  list: [
    {
      name: "Pikachu",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
      number: "#25",
    },
    {
      name: "Charmander",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
      number: "#4",
    },
    {
      name: "Eevee",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/133.png",
      number: "#133",
    },
    {
      name: "Articuno",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/144.png",
      number: "#144",
    },
    {
      name: "Blastoise",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png",
      number: "#9",
    },
    {
      name: "Rapidash",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/78.png",
      number: "#78",
    },
    {
      name: "Articuno",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/144.png",
      number: "#144",
    },
    {
      name: "Blastoise",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png",
      number: "#9",
    },
    {
      name: "Rapidash",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/78.png",
      number: "#78",
    }
  ]
}