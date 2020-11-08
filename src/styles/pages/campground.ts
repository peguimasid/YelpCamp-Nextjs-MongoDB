import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem;

  @media (max-width: 600px) {
    padding: 1rem;
  }
`

export const InformationsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #282a36;
  padding: 20px;
  border-radius: 5px;

  @media (max-width: 600px) {
    width: 100%;
  }

  img {
    max-width: 500px;
    border-radius: 5px;
    width: 100%;
    height: auto;
  }

  h1 {
    margin-top: 20px;
  }

  p {
    margin-top: 10px;
  }

  b {
    margin-top: 30px;
  }

  a {
    background: #069;
    text-decoration: none;
    color: #fff;
    padding: 15px 20px;
    border-radius: 5px;
    margin-top: 20px;
    text-align: center;
  }
`
