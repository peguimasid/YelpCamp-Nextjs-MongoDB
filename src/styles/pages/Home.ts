import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 90vh;
  padding: 2rem;
`

export const CampgroundsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  list-style: none;

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 660px) {
    grid-template-columns: repeat(1, 1fr);
  }

  li {
    display: flex;
    flex-direction: column;
    background: #303030;
    border-radius: 10px;
    padding: 20px;

    img {
      max-width: 100%;
      height: auto;
      align-self: center;
      border-radius: 5px;
    }
  }
`

export const CampgroundTitle = styled.h1`
  color: #fff;
  font-size: 20px;
  margin-top: 20px;
`
