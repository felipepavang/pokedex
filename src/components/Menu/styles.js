import styled from 'styled-components'

const Container = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: space-around;

  a {
    text-decoration: none;
    font-size: 1.2rem;
    color: white;
    transition: 0.2s ease-in-out;
  }

  a:hover {
    transform: scale(1.1);
  }
`;

export default Container