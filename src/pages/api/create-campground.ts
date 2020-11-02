import { connectToDatabase } from '~/config/mongodb'
import { NowRequest, NowResponse } from '@vercel/node'

export default async (req: NowRequest, res: NowResponse) => {
  const { title, description, price, imageUrl } = req.body

  if (!title || !description || !price || !imageUrl) {
    return res.status(400).json('Preencha todos os campos')
  }

  const { db, client } = await connectToDatabase()

  if (client.isConnected()) {
    await db.collection('campgrounds').insertOne({
      title,
      description,
      price,
      imageUrl
    })
  }

  return res.status(201).json({ title, description, price, imageUrl })
}
