import React from 'react'
import Link from 'next/link'
import SEO from '~/components/SEO'

// import { Container } from './styles';

const Main: React.FC = () => {
  return (
    <>
      <h1>YelpCamp</h1>
      <Link href="/home">Ver todos os acampamentos</Link>
      <SEO
        title="Página inicial"
        description="Find thousands of campgrounds near you at very affordable prices"
      />
    </>
  )
}

export default Main
