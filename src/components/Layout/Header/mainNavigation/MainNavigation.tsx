import React from 'react'
import { Hamburger } from './Hamburger/Hamburger'
import { NavMainNavigation } from './NavMainNavigation/NavMainNavigation'

function toogleHamburgerIcon() {
  const hamburger_icon = document.getElementsByClassName('hamburgerIcon')[0]
  hamburger_icon.classList.toggle('change')
}

export const MainNavigation = () => {
  return (
    <div className="header_navigation">
      <input
        type="checkbox"
        id="toggle-main-menu"
        role="button"
        aria-label="Toggle Menu"
      />
      <label
        className="menu-on"
        htmlFor="toggle-main-menu"
        onClick={toogleHamburgerIcon}
      >
        <Hamburger />
      </label>
      <label
        className="menu-off"
        htmlFor="toggle-main-menu"
        onClick={toogleHamburgerIcon}
      ></label>
      <div className="header_menu">
        <NavMainNavigation />
      </div>
    </div>
  )
}
