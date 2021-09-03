import React from 'react'
import { Bar, Title, Container } from './styles'
import FavoriteItem from '../FavoriteItem'

function FavoriteBar() {
  //Created to receive the favorited Pokemons from the list, the objects are temporary
  const favoriteList = [
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

  return (
    <Bar>
      <Title>Team</Title>
      <Container>
        {favoriteList.map(item => <FavoriteItem name={item.name} image={item.image}/>)}
      </Container>
    </Bar>
  );
}

export default FavoriteBar