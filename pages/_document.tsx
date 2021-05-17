import Document, { Html, Head, Main, NextScript } from 'next/document'
import { isProduction } from '../utils/utils'
import YandexMetrika from '../components/YandexMetrika/YandexMetrika'

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
