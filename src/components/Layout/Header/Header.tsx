import { imageSrc } from '@/constants/sources'
import Image from 'next/image'
import React from "react"
import { MainNavigation } from './mainNavigation/MainNavigation'

const LOGO = "default-image.jpg"

export const Header = () => {
  return (

    <header>
      <Image
        src={`${imageSrc}${LOGO}`}
        alt="Picture of the author"
        width={500}
        height={500}
        />
            <h1 className="title">Nomada</h1>
      <MainNavigation/>
    </header>
          )
}
