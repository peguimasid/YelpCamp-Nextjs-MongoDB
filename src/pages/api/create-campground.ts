import { connectToDatabase } from '~/config/mongodb'
import { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { title, description, price, imageUrl } = req.query

  if (!title || !description || !price || !imageUrl) {
    return res.status(400).json('Missing data')
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

  return res.status(200).json({ title, description, price, imageUrl })
}
