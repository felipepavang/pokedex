import styled from 'styled-components'

const Bar = styled.div`
  width: 50%;
  height: 200px;
  margin: 24px auto;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-shadow: 1px 1px 4px black;
  border-radius: 5px;
`

const Title = styled.h2`
  display: block;
  margin: 0;
  height: 50px;
  width: 100%;
  line-height: 50px;
  border-radius: 5px 5px 0 0;
  text-align: center;
  background-color: #3b4cca;
  color: #ffffff;
`

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`

export { Bar, Title, Container }