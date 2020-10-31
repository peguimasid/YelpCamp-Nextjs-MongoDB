import { Provider } from 'next-auth/client'
import React from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '~/styles/global'
import theme from '~/styles/theme'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const { session } = pageProps

  return (
    <ThemeProvider theme={theme}>
      <Provider session={session}>
        <Component {...pageProps} />
      </Provider>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default MyApp
