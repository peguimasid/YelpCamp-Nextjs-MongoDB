import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 5rem;
  bottom: 0;

  @media (min-width: 660px) {
    position: relative;
  }

  display: flex;
  align-items: center;
  justify-content: center;
  background: #282a36;

  a {
    color: #fff;
    padding-left: 8px;
    padding-top: 3px;
  }
`
