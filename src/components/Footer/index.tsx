import React from 'react'
import { Container } from './styles'
import Link from 'next/link'

const Footer: React.FC = () => {
  return (
    <Container>
      Feito com ❤️ por
      <Link href="https://github.com/peguimasid"> Guilhermo Masid</Link>
    </Container>
  )
}

export default Footer
