import styled from 'styled-components'

const Card = styled.div`
  position: relative;
  width: 7.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0.5rem;
  border: 1px solid black;
  box-shadow: 1px 1px 5px black;
  transition: all 0.2s;
  transform: scale(0.95);
  cursor: pointer;

  :hover {
    transform: scale(1);
    box-shadow: 1px 1px 15px black;
  }
`

const Image = styled.img`
  width: 100%;
  background-color: #6c757e;
  border-radius: 0.5rem 0.5rem 0 0;
  border-bottom: 1px solid black;
`

const Title = styled.h4`
  display: block;
  width: 100%;
  margin: 0.5rem;
  text-align: center;
`

export { Card, Image, Title }