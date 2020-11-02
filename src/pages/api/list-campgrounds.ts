import { connectToDatabase } from '~/config/mongodb'
import { NowRequest, NowResponse } from '@vercel/node'

export default async (req: NowRequest, res: NowResponse) => {
  const { db, client } = await connectToDatabase()

  if (client.isConnected()) {
    await db
      .collection('campgrounds')
      .find()
      .toArray((error: Error, campgrounds: JSON) => {
        if (error) {
          throw new Error('Internal Server Error on list campgrounds')
        }

        return res.status(200).json({ campgrounds })
      })
  }
}
