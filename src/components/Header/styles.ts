import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 10vh;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;

  padding: 0 40px;
  background: #282a36;

  @media (max-width: 600px) {
    padding: 0 1rem;
  }

  a {
    color: #fff;
    padding: 10px;
    background: #069;
    border-radius: 5px;
    text-decoration: none;
  }
`
