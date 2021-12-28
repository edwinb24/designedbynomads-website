import { localPath } from '@/constants/sources'
import Document, { Head, Html, Main, NextScript } from 'next/document'
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    // const isServer = !!ctx.req
    // const isBrowser = !ctx.req
    // console.log(`IsServer ${isServer}`)
    // console.log(`IsBrowser ${isBrowser}`)
    // if (isBrowser) {
    //   const displayDesign =
    //     getCookie('style') ??
    //     setCookie(
    //       'style',
    //       designsAvailable[Math.floor(Math.random() * designsAvailable.length)]
    //     )
    //   if (!displayDesign) console.log('Error Setting Style')
    // }

    return { ...initialProps }
  }

  render() {
    console.log('localPath')
    console.log(localPath)
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
