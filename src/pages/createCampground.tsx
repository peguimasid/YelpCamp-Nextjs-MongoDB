import React, { FormEvent, useState } from 'react'

import { Container } from '~/styles/pages/createCampground'

const pages: React.FC = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [imageUrl, setImageUrl] = useState('')

  async function handleAddCampground(e: FormEvent) {
    e.preventDefault()

    const response = await fetch(
      `/api/create-campground?title=${title}&description=${description}&price=${price}&imageUrl=${imageUrl}`
    )

    if (response.status === 400) {
      console.log('deu errado')
    }

    if (response.status === 200) {
      console.log('deu certo')
    }
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
        <button type="submit">Cadastrar acampamento</button>
      </form>
    </Container>
  )
}

export default pages
