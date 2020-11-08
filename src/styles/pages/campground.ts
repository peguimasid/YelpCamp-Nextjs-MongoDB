import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem;
`

export const InformationsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #282a36;
  padding: 20px;
  border-radius: 5px;

  img {
    max-width: 500px;
    border-radius: 5px;
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
