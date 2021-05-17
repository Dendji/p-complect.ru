import Document, { Html, Head, Main, NextScript } from 'next/document'
import * as Sentry from '@sentry/browser'
import { isProduction } from '../utils/utils'
import YandexMetrika from '../components/YandexMetrika/YandexMetrika'

if (!process.env.NEXT_PUBLIC_SENTRY_DSN) {
  throw new Error('NEXT_PUBLIC_SENTRY_DSN is empty')
}

if (
  process.env.NODE_ENV === 'production' &&
  process.env.NEXT_PUBLIC_SENTRY_DSN
) {
  Sentry.init({
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
    release: process.env.NEXT_PUBLIC_SENTRY_RELEASE,
    environment: process.env.SENTRY_ENVIRONMENT,
  })
}

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="shortcut icon" type="image/png" href="/favicon.png" />
          <link
            type="font/woff2"
            as="font"
            crossOrigin="anonymous"
            href="/TTNorms/ttnorms-regular-webfont.woff2"
          />
          <link
            as="font"
            crossOrigin="anonymous"
            href="/TTNorms/ttnorms-bold-webfont.woff2"
          />
          <link
            as="font"
            crossOrigin="anonymous"
            href="/TTNorms/ttnorms-medium-webfont.woff2"
          />

          {isProduction() && (
            <>
              <YandexMetrika />
            </>
          )}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
