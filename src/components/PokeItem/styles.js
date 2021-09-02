import styled from "styled-components"

const Card = styled.div`
  width: 200px;
  height: 250px;
  margin: 10px;
  background-color: white;
  border: 1px solid black;
  border-radius: 5px;
  text-align: center;
  color: #1b1b1b;
`

const PokeImage = styled.img`
  display: block;
  width: 70%;
  margin: 5px auto 0px auto;
`

const PokeName = styled.h2`
  margin: 5px 0;
`

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  margin-top: 20px;
`

const PokeId = styled.p`
  margin: 0;
  font-size: 20px;
`

export { Card, PokeImage, PokeName, Content, PokeId }