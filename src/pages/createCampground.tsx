import React from 'react'

import { Container } from '~/styles/pages/createCampground'

function handleAddCampground() {
  const title = 'Rocks'
  const description = 'Very good'
  const price = '30'
  const imageUrl =
    'https://images.unsplash.com/photo-1476041800959-2f6bb412c8ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'

  const response = fetch(
    `/api/create-campground?title=${title}&description=${description}&price=${price}&imageUrl=${imageUrl}`
  )

  console.log(response)
}

const pages: React.FC = () => {
  return (
    <Container>
      <h1>Create Campground</h1>
      <button onClick={handleAddCampground}>Clica</button>
    </Container>
  )
}

export default pages
