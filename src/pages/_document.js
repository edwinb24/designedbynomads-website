import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="description" content="Nomada Site" />
          <meta charset="uft-8" />
          {/* TODO - Remove this robot link */}
          <meta name="robots" content="noindex, nofollow" />
          <link rel="stylesheet" href="/static/css/lazyHeader.css" />
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
