import React, { FormEvent, useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'

import { Container, SubmitButton } from '~/styles/pages/createCampground'

const pages: React.FC = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [imageUrl, setImageUrl] = useState('')

  const [loading, setLoading] = useState(false)

  const router = useRouter()

  async function handleAddCampground(event: FormEvent) {
    setLoading(true)
    event.preventDefault()

    try {
      await axios.post('/api/create-campground', {
        title,
        description,
        price,
        imageUrl
      })

      router.push('/')
      toast.success('Acampamento criado com sucesso')
    } catch (err) {
      toast.error('Erro: ' + err.response.data)
    }
    setLoading(false)
  }

  return (
    <Container>
      <h1>Create Campground</h1>
      <form onSubmit={handleAddCampground}>
        <input
          type="text"
          value={title}
          placeholder="Titulo"
          onChange={e => setTitle(e.target.value)}
        />
        <input
          type="text"
          value={description}
          placeholder="Descrição"
          onChange={e => setDescription(e.target.value)}
        />
        <input
          type="number"
          value={price}
          placeholder="Preço /dia"
          onChange={e => setPrice(e.target.value)}
          min="0"
        />
        <input
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

export default pages
