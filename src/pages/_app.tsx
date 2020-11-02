import React from 'react'
import { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '~/styles/global'
import theme from '~/styles/theme'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyle />
      <ToastContainer autoClose={3000} />
    </ThemeProvider>
  )
}

export default MyApp
