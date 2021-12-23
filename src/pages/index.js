import { Footer } from '@/components/Layout/Footer/Footer.tsx'
import { Header } from '@/components/Layout/Header/Header.tsx'
import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Nomada - Marketing & Digital Agency</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
