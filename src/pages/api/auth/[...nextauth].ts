import NextAuth from 'next-auth'
import Adapters from 'next-auth/adapters'
import Providers from 'next-auth/providers'

const options = {
  providers: [
    Providers.Email({
      server: process.env.NEXTAUTH_EMAIL_SERVER,
      from: process.env.NEXTAUTH_EMAIL_FROM
    })
  ],

  database: process.env.NEXTAUTH_DATABASE_URL,
  adapters: Adapters.Default
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default (req, res) => NextAuth(req, res, options)
