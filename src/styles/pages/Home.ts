import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 54px;
    color: ${props => props.theme.colors.primary};
  }

  a {
    color: #fff;
    padding: 10px;
    background: #069;
    border-radius: 5px;
    text-decoration: none;
  }
`
