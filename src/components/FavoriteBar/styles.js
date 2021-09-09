import styled from 'styled-components'

const BarContainer = styled.div`
  width: 50%;
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
  margin: 0;
  height: 3rem;
  width: 100%;
  line-height: 3rem;
  border-radius: 0.5rem 0.5rem 0 0;
  text-align: center;
  background-color: #353a40;
  color: #ffffff;
`

const CardContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
`

export { BarContainer, Title, CardContainer }