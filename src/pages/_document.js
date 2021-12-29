import { localPath } from '@/constants/sources'
import Document, { Head, Html, Main, NextScript } from 'next/document'
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta name="description" content="Nomada Site" />
          {/* TODO - Remove this robot link */}
          <meta name="robots" content="noindex, nofollow" />
          {/* --- Lazy Styles --- */}
          <noscript id="render-onload">
            <link rel="stylesheet" href={`${localPath}/css/lazyHeader.css`} />
          </noscript>
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
