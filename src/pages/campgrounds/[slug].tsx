import React from 'react'
import { useRouter } from 'next/router'
import { GetStaticPaths, GetStaticProps } from 'next'
import axios from 'axios'
import { formatPrice } from '~/util/format'

// import { Container } from './styles';

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
    <div>
      <h1>{campground.title}</h1>
      <p>{campground.description}</p>
      <b>{formatPrice(Number(campground.price))}</b>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true
  }
}
// export const getStaticPaths: GetStaticPaths = async () => {
//   const baseUrl = process.env.BASE_URL || 'http://localhost:3000'

//   const response = await axios.get(`${baseUrl}/api/list-campgrounds`)

//   const { campgrounds } = response.data

//   const paths = campgrounds.map(campground => {
//     return {
//       params: { slug: campground.slug }
//     }
//   })

//   return {
//     paths,
//     fallback: true
//   }
// }

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
    // revalidate: 1000
  }
}
