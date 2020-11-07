import { connectToDatabase } from '~/config/mongodb'
import { NowRequest, NowResponse } from '@vercel/node'
import removeDoubleSpaces from '~/util/removeDoubleSpaces'

export default async (req: NowRequest, res: NowResponse) => {
  let { slug, title, description, price, imageUrl } = req.body

  if (!title || !description || !price || !imageUrl) {
    return res.status(400).json('Preencha todos os campos')
  }

  title = removeDoubleSpaces(title)

  const { db, client } = await connectToDatabase()

  if (client.isConnected()) {
    const campgroundExists = await db
      .collection('campgrounds')
      .findOne({ slug })

    if (campgroundExists) {
      return res.status(500).json('Esse acampamento já existe')
    }

    await db.collection('campgrounds').insertOne({
      slug,
      title,
      description,
      price,
      imageUrl
    })

    return res.status(201).json({ title, description, price, imageUrl })
  }

  return res.status(500).json({ error: 'client DB is not connected' })
}
