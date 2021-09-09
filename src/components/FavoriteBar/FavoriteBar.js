import React from 'react'
import { BarContainer, Title, CardContainer } from './styles'
import FavoriteItem from '../FavoriteItem'

function FavoriteBar({ list }) {
  return (
    <BarContainer>
      <Title>Team</Title>
      <CardContainer>
        {list.map(item => <FavoriteItem name={item.name} image={item.image}/>)}
      </CardContainer>
    </BarContainer>
  );
}

export default FavoriteBar