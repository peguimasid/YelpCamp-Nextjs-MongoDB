import React, { FormEvent, useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'

import removeDoubleSpaces from '~/util/removeDoubleSpaces'

import { Container, SubmitButton } from '~/styles/pages/createCampground'

import SEO from '~/components/SEO'

const createCampground: React.FC = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [imageUrl, setImageUrl] = useState('')

  const [loading, setLoading] = useState(false)

  const router = useRouter()

  async function handleSubmit(event: FormEvent) {
    setLoading(true)

    event.preventDefault()

    const slug = removeDoubleSpaces(title)
      .trim()
      .toLowerCase()
      .replaceAll(' ', '-')

    try {
      await axios.post('/api/create-campground', {
        slug,
        title,
        description,
        price,
        imageUrl
      })

      router.push('/home')
      toast.success('Acampamento criado com sucesso')
    } catch (err) {
      toast.error(err.response.data)
    }
    setLoading(false)
  }

  return (
    <Container>
      <SEO title="Create Campground" />
      <h1>Criar acampamento</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          type="text"
          value={title}
          placeholder="Título"
          onChange={e => setTitle(e.target.value)}
        />
        <input
          name="description"
          type="text"
          value={description}
          placeholder="Descrição"
          onChange={e => setDescription(e.target.value)}
        />
        <input
          name="price"
          type="number"
          value={price}
          placeholder="Preço por dia"
          onChange={e => setPrice(e.target.value)}
          min="0"
          max="1000"
        />
        <input
          name="imageUrl"
          type="text"
          value={imageUrl}
          placeholder="Link da imagem"
          onChange={e => setImageUrl(e.target.value)}
        />
        <SubmitButton type="submit" disabled={loading}>
          Cadastrar acampamento
        </SubmitButton>
      </form>
    </Container>
  )
}

export default createCampground
