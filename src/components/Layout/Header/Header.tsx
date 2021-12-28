import React from 'react'
import { Logo } from './Logo/Logo'
import { MainNavigation } from './mainNavigation/MainNavigation'

export const Header = () => {
  return (
    <header className="main-header  ">
      <Logo />
      <MainNavigation />
    </header>
  )
}
