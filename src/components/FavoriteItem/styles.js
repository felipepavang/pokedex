import styled from 'styled-components'

const Card = styled.div`
  width: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  border: 1px solid black;
  box-shadow: 1px 1px 5px black;
`

const Image = styled.img`
  width: 100%;
  background-color: #6c757e;
  border-bottom: 1px solid black;
`

const Title = styled.h4`
  display: block;
  width: 100%;
  margin: 8px;
  text-align: center;
`

export { Card, Image, Title }