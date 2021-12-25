import { imageSrc } from '@/constants/sources'
import Image from 'next/image'
import React from 'react'

const LOGO = 'default-image.jpg'

export const Header = () => {
  return (
    <div className="logo">
      <Image
        src={`${imageSrc}${LOGO}`}
        alt="Picture of the author"
        width={100}
        height={100}
      />
      <a href="/">Edwin Broce</a>
    </div>
  )
}
