import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 90vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 54px;
    color: ${props => props.theme.colors.primary};
  }
`
