import 'normalize.css'
import './index.css'
import Layout from '../components/Layout/Layout'
import React from 'react'
import { PageTransition } from 'next-page-transitions'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import { ThemeProvider } from '@material-ui/core'
import App, { AppContext, AppProps } from 'next/app'
import { useStore } from '../store/store'
import { Provider } from 'react-redux'

export const theme = createMuiTheme({
  spacing: (factor) => [4, 8, 16, 36, 64][factor],
})

const MyApp = ({ Component, pageProps, router }: AppProps) => {
  const store = useStore(pageProps.initialReduxState)
  // const [isLoading, setLoading] = useState(false)

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Layout>
          <PageTransition
            timeout={300}
            loadingDelay={200}
            classNames="page-transition"
            monkeyPatchScrolling
          >
            <Component {...pageProps} key={router.route} />
          </PageTransition>
        </Layout>
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