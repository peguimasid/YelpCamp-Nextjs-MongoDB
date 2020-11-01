import React from 'react'
import { Container } from '~/styles/pages/Home'
import Link from 'next/link'

const Home: React.FC = () => {
  return (
    <Container>
      <h1>Initial Structure</h1>
      <Link href="/createCampground">
        <a>Criar acampamento</a>
      </Link>
    </Container>
  )
}

export default Home
