import React from 'react'
import { useRouter } from 'next/router'
import { GetStaticPaths, GetStaticProps } from 'next'
import axios from 'axios'
import { formatPrice } from '~/util/format'
import Link from 'next/link'

import { Container, InformationsContainer } from '~/styles/pages/campground'

interface ICampground {
  _id: string
  slug: string
  title: string
  description: string
  price: string
  imageUrl: string
}

interface CampgroundProps {
  campground: ICampground
}

export default function Campgrounds({ campground }: CampgroundProps) {
  const router = useRouter()

  if (router.isFallback) {
    return <h1>Carregando...</h1>
  }

  return (
    <Container>
      <InformationsContainer>
        <img src={campground.imageUrl} alt={campground.title} />
        <h1>{campground.title}</h1>
        <p>{campground.description}</p>
        <b>{formatPrice(Number(campground.price))} /dia</b>
        <Link href="/home">
          <a>Voltar para todos os acampamentos</a>
        </Link>
      </InformationsContainer>
    </Container>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const baseUrl = process.env.BASE_URL || 'http://localhost:3000'

  const response = await axios.get(`${baseUrl}/api/list-campgrounds`)

  const { campgrounds } = response.data

  const paths = campgrounds.map((campground: { slug: any }) => {
    return {
      params: { slug: campground.slug }
    }
  })

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps<CampgroundProps> = async context => {
  const { slug } = context.params

  const baseUrl = process.env.BASE_URL || 'http://localhost:3000'

  const response = await axios.get(
    `${baseUrl}/api/get-campground-info?id=${slug}`
  )

  const { campground } = response.data

  return {
    props: {
      campground
    }
  }
}
