import { Footer } from '@/components/Layout/Footer/Footer.tsx'
import { Header } from '@/components/Layout/Header/Header.tsx'
import { localPath } from '@/constants/sources'
import Head from 'next/head'
import Script from 'next/script'

export default function Home() {
  ///This is how to change styles based on cookie
  const stylesLink = <link rel="stylesheet" href="/static/css/lazyTest.css" />
  return (
    <div className="container">
      <Head>
        <title>Nomada - Marketing & Digital Agency</title>
        <link rel="icon" href="/favicon.ico" />
        {stylesLink}
      </Head>

      <Script
        strategy="afterInteractive"
        src={`${localPath}/scripts/stylesLazyLoading.js`}
      />

      <main>
        <Header />
        <p className="description">
          Get started by editinaaaaaa <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
