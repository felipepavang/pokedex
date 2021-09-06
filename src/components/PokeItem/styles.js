import styled from "styled-components"

const Card = styled.div`
  width: 250px;
  height: 18rem;
  margin: 1rem 0;
  background-color: #ffffff;
  border: 1px solid black;
  border-radius: 0.5rem;
  text-align: center;
  color: #1b1b1b;
`

const PokeImage = styled.img`
  display: block;
  width: 70%;
  margin: 0.5rem auto 0 auto;
`

const PokeName = styled.h2`
  margin: 0.5rem 0;
`

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  margin-top: 1rem;
`

const PokeId = styled.p`
  margin: 0;
  font-size: 1.5rem;
`

export { Card, PokeImage, PokeName, Content, PokeId }