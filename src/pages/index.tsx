import React from 'react'
import Link from 'next/link'
import SEO from '~/components/SEO'

import { Container } from '~/styles/pages/Initial'

const Initial: React.FC = () => {
  return (
    <Container>
      <h1>YelpCamp</h1>
      <Link href="/home">
        <a>Ver todos os acampamentos</a>
      </Link>
      <SEO
        title="Initial Page"
        image="https://www.portaldasmissoes.com.br/uploads/noticias/0001650_zoom_acampamento-barraca-regiao-das-missoes-santo-angelo-missioneiro-acampamento-ministerio-turismo-mtur-(1).jpg"
        description="Find thousands of campgrounds near you at very affordable prices"
      />
    </Container>
  )
}

export default Initial
