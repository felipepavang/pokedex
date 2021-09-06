import styled from 'styled-components'

const ListContainer = styled.div`
  width: 70%;
  height: fit-content;
  margin: 1.5rem auto;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-shadow: 1px 1px 4px black;
  border-radius: 0.5rem;
`

const Title = styled.h2`
  display: block;
  height: 200px;
  margin: 0;
  height: 3rem;
  width: 100%;
  line-height: 3rem;
  border-radius: 0.5rem 0.5rem 0 0;
  text-align: center;
  background-color: #353a40;
  color: #ffffff;
`

const PokeContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`

export { ListContainer, Title, PokeContainer }