import '@/styles/fonts.scss'
//Component Styles
import '@/styles/headerStyles/header.scss'
import '@/styles/reset.scss'
import '@/styles/variables.scss'
import dynamic from 'next/dynamic'
import { useEffect } from 'react'

const Application = ({ Component, pageProps }) => {
  useEffect(() => {
    console.log('EEEEE')
    const DynamicImport = dynamic(
      () => import('@/styles/headerStyles/lazyHeader.scss'),
      { ssr: false }
    )
  }, [])

  return

