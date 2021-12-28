import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="description" content="Nomada Site" />
          {/* TODO - Remove this robot link */}
          <meta name="robots" content="noindex, nofollow" />
          {/* --- Lazy Styles --- */}
          <noscript id="render-onload">
            <link rel="stylesheet" href="/static/css/lazyHeader.css" />
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
