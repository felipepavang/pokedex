import { useState } from 'react'
import styled from 'styled-components'
import pikachuIMG from '../../images/pikachu.png'
import favorited from '../../images/favorited.png'
import unfavorited from '../../images/unfavorited.png'

const Card = styled.div`
  width: 200px;
  height: 250px;
  margin: 10px;
  background-color: white;
  border: 1px solid black;
  border-radius: 5px;
  text-align: center;
  color: #1b1b1b;

  img {
    display: block;
    width: 70%;
    margin: 5px auto 0px auto;
  }

  h2 {
    margin: 5px 0;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    margin-top: 20px;

    p {
      margin: 0;
      font-size: 20px;
    }

    button {
      border: none;
      background-color: transparent;
      cursor: pointer;
    }

    img {
      margin: 0;
      width: 32px;
    }
  }
`

export default function PokeItem() {
  const [state, setState] = useState(false)

  return (
    <Card>
      <img src={pikachuIMG} alt='Imagem do Pikachu' />
      <h2>Pikachu</h2>
      <div>
        <p>#25</p>
        <button onClick={() => setState(!state)}><img src={state ? favorited : unfavorited} alt='Botão de favorito' /></button>
      </div>
    </Card>
  )
}