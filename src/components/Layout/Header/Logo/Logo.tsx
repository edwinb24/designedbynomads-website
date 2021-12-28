import { imageSrc } from '@/constants/sources'
import Image from 'next/image'
import Link from 'next/link'

const LOGO = 'default-image.jpg'

export const Logo = () => {
  return (
    <div className="logo">
      <Image
        src={`${imageSrc}${LOGO}`}
        alt="Picture of the author"
        width={100}
        height={100}
      />
      <Link href="/">
        <a>Nomada Designs</a>
      </Link>
    </div>
  )
}
