import React from 'react'
import NextAuth from 'next-auth/client'
import { GetServerSideProps } from 'next'

interface IUser {
  name?: string
  email: string
  image?: string
}

interface ISession {
  accessToken: string
  expires: string
  user: IUser
}

interface SessionProps {
  session: ISession
}

const Home: React.FC<SessionProps> = ({ session }) => {
  return (
    <p>
      {!session && (
        <>
          Not signed in <br />
          <button onClick={() => NextAuth.signin()}>Sign in</button>
        </>
      )}
      {session && (
        <>
          Signed in as {session.user.email} <br />
          <button onClick={() => NextAuth.signout()}>Sign out</button>
        </>
      )}
    </p>
  )
}

export const getServerSideProps: GetServerSideProps<SessionProps> = async ({
  req
}) => {
  const session = await NextAuth.session({ req })

  return {
    props: {
      session
    }
  }
}

export default Home
