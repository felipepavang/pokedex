import React from 'react'
import { ListContainer, Title, PokeContainer } from './styles'
import PokeItem from '../PokeItem'

function PokeList() {
  //Created to receive the Pokemons from the list, the objects are temporary
  const PokemonList = [
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
    },
    
  ];

  return (
    <ListContainer>
      <Title>Pokémon List</Title>
      <PokeContainer>
        {PokemonList.map(item => <PokeItem
          name={item.name}
          img={item.image}
          id={item.number}
        />)}
      </PokeContainer>
    </ListContainer>
  )
}

export default PokeList