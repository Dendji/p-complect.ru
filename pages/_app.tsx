import 'normalize.css'
import './index.css'
import React from 'react'
import { PageTransition } from 'next-page-transitions'
import { ThemeProvider } from '@mui/material'
import App, { AppContext, AppProps } from 'next/app'
import { useStore } from '../store/store'
import { Provider } from 'react-redux'
import 'swiper/swiper-bundle.css'
import 'swiper/components/navigation/navigation.scss'
import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  spacing: (factor) => [4, 8, 16, 36, 64][factor],
  palette: {
    primary: {
      main: '#FAAC3D',
    },
  },
})

const MyApp = ({ Component, pageProps, router }: AppProps) => {
  const store = useStore(pageProps.initialReduxState)
  // const [isLoading, setLoading] = useState(false)

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <PageTransition
          timeout={300}
          loadingDelay={200}
          classNames="page-transition"
          monkeyPatchScrolling
        >
          <Component {...pageProps} key={router.route} />
        </PageTransition>
      </ThemeProvider>
    </Provider>
  )
}
// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.

MyApp.getInitialProps = async (appContext: AppContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext)

  return { ...appProps }
}

export default MyApp
