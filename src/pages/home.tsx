import React from 'react'
import { GetServerSideProps } from 'next'
import axios from 'axios'
import Link from 'next/link'
import SEO from '~/components/SEO'

import { formatPrice } from '~/util/format'

import Header from '~/components/Header'
import Footer from '~/components/Footer'

import {
  Container,
  CampgroundsList,
  CampgroundTitle
} from '~/styles/pages/Home'

interface ICampground {
  slug: string
  title: string
  description: string
  price: string
  imageUrl: string
}

interface HomeProps {
  campgrounds: ICampground[]
}

export default function Home({ campgrounds }: HomeProps) {
  return (
    <>
      <Header />
      <Container>
        <SEO
          title="Home"
          description="Find thousands of campgrounds near you at very affordable prices"
          image={campgrounds[campgrounds.length - 1].imageUrl}
        />
        <CampgroundsList>
          {campgrounds.map(campground => {
            return (
              <li key={campground.title}>
                <img src={campground.imageUrl} />
                <CampgroundTitle>{campground.title}</CampgroundTitle>
                <p>{campground.description}</p>
                <b>{formatPrice(Number(campground.price))} /dia</b>
                <Link href={`campgrounds/${campground.slug}`}>
                  <a>Mais informações</a>
                </Link>
              </li>
            )
          })}
        </CampgroundsList>
        <Footer />
      </Container>
    </>
  )
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const baseUrl = process.env.BASE_URL || 'http://localhost:3000'

  const response = await axios.get(`${baseUrl}/api/list-campgrounds`)
  const { campgrounds } = response.data

  return {
    props: {
      campgrounds
    }
  }
}
