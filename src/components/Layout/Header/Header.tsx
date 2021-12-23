import { imageSrc } from '@/constants/sources';
import Image from 'next/image';
import React from "react";

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
    </header>
          )
}
