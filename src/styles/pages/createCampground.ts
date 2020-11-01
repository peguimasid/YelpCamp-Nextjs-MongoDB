import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 0 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 54px;
    color: ${props => props.theme.colors.primary};
    @media (max-width: 600px) {
      font-size: 40px;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    width: 30rem;

    @media (max-width: 600px) {
      width: 20rem;
    }
  }

  input {
    border: 0;
    margin-top: 20px;
    padding: 10px 20px;
    border-radius: 5px;
    outline: none;
  }

  button {
    margin-top: 20px;
    padding: 10px 20px;
    background: #069;
    border: none;
    color: #fff;
    border-radius: 5px;
  }
`
