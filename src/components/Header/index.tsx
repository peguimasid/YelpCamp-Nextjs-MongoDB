import React from 'react'
import { Container } from './styles'
import Link from 'next/link'

const Header: React.FC = () => {
  return (
    <Container>
      <Link href="/">
        <h1>YelpCamp</h1>
      </Link>
      <Link href="/createCampground">
        <a>Criar acampamento</a>
      </Link>
    </Container>
  )
}

export default Header
