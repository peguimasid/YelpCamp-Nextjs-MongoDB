import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`

export const CampgroundsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  list-style: none;
  padding-bottom: 5rem;
  padding: 2rem;

  @media (max-width: 600px) {
    padding: 1rem;
  }

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 660px) {
    grid-template-columns: repeat(1, 1fr);
  }

  li {
    display: flex;
    flex-direction: column;
    background: #282a36;
    border-radius: 10px;
    padding: 20px;

    p {
      margin-top: 15px;
      font-size: 20px;
    }

    b {
      margin-top: 25px;
    }

    img {
      max-width: 100%;
      height: auto;
      align-self: center;
      border-radius: 5px;
    }
  }
`

export const CampgroundTitle = styled.h1`
  font-size: 35px;
  margin-top: 20px;
`
