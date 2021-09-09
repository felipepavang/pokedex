import React from 'react'
import { ListContainer, Title, PokeContainer } from './styles'
import PokeItem from '../PokeItem'

function PokeList({ list }) {
  return (
    <ListContainer>
      <Title>Pokémon List</Title>
      <PokeContainer>
        {list.map(item => <PokeItem
          name={item.name}
          img={item.image}
          id={item.number}
        />)}
      </PokeContainer>
    </ListContainer>
  )
}

export default PokeList