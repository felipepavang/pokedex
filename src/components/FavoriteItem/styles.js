import styled from 'styled-components'

const Card = styled.div`
  width: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  border: 1px solid black;
`

const Image = styled.img`
  width: 100%;
`

const Title = styled.h4`
  display: block;
  width: 100%;
  margin: 12px;
  text-align: center;
`

export { Card, Image, Title }