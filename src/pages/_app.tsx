import React from 'react'
import { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify'
import { ThemeProvider } from 'styled-components'

import Router from 'next/router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import GlobalStyle from '~/styles/global'
import theme from '~/styles/theme'

NProgress.configure({ showSpinner: false })

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

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
