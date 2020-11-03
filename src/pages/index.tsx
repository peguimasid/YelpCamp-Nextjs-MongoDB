import React from 'react'
import { GetServerSideProps } from 'next'
import axios from 'axios'

import { formatPrice } from '~/util/format'

import Header from '~/components/Header'

import {
  Container,
  CampgroundsList,
  CampgroundTitle
} from '~/styles/pages/Home'

interface ICampground {
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
        <CampgroundsList>
          {campgrounds.map(campground => {
            return (
              <li key={campground.title}>
                <img src={campground.imageUrl} />
                <CampgroundTitle>{campground.title}</CampgroundTitle>
                <p>{campground.description}</p>
                <p>{formatPrice(Number(campground.price))} /dia</p>
              </li>
            )
          })}
        </CampgroundsList>
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
