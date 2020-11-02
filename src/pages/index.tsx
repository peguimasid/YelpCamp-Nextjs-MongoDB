import React from 'react'
import { GetServerSideProps } from 'next'
import axios from 'axios'

import { useRouter } from 'next/router'

import Header from '~/components/Header'

import { Container } from '~/styles/pages/Home'

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
        <ul>
          {campgrounds.map(campground => {
            return <li key={campground.title}>{campground.title}</li>
          })}
        </ul>
      </Container>
    </>
  )
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async context => {
  const baseUrl = process.env.BASE_URL || 'http://localhost:3000'

  const response = await axios.get(`${baseUrl}/api/list-campgrounds`)
  const { campgrounds } = response.data

  return {
    props: {
      campgrounds
    }
  }
}
