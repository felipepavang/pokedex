import React from 'react'
import Button from './styles'
import favorited from '../../images/favorited.png'
import unfavorited from "../../images/unfavorited.png";

function FavButton({ isSelected }) {
  return (
    <Button>
      <img src={isSelected ? favorited : unfavorited} alt="Botão de Favorito"/>
    </Button>
  )
}

export default FavButton