import '@/styles/fonts.scss'
//Component Styles
import '@/styles/headerStyles/header.scss'
import '@/styles/reset.scss'
import '@/styles/variables.scss'
import dynamic from 'next/dynamic'

const Application = ({ Component, pageProps }) => {
  const DynamicComponent = dynamic(() =>
    import('@/styles/designStyles/trendy.scss')
  )
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}
export default Application
