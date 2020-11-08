import { connectToDatabase } from '~/config/mongodb'
import { NowRequest, NowResponse } from '@vercel/node'

export default async (req: NowRequest, res: NowResponse) => {
  const { db, client } = await connectToDatabase()

  const slug = req.query.id

  if (client.isConnected()) {
    const campground = await db.collection('campgrounds').findOne({ slug })

    return res.status(200).json({ campground })
  }

  return res.status(500).json({ Error })
}
