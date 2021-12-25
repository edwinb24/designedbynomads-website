import React from 'react'
import { Hamburger } from './Hamburger/Hamburger'
import styles from './MainNavigation.module.scss'
import { NavMainNavigation } from './NavMainNavigation/NavMainNavigation'

function toogleHamburgerIcon() {
  const hamburger_icon = document.getElementsByClassName('hamburgerIcon')[0]
  hamburger_icon.classList.toggle('change')
}

export const MainNavigation = () => {
  return (
    <div className={styles.mainNavigation}>
      <input
        type="checkbox"
        id="toggleMainMenu"
        role="button"
        aria-label="Toggle Menu"
      />
      <label
        className={styles.menuOn}
        htmlFor="toggleMainMenu"
        onClick={toogleHamburgerIcon}
      >
        <Hamburger />
      </label>
      <NavMainNavigation />
      <label
        className={styles.menuOff}
        htmlFor="toggleMainMenu"
        onClick={toogleHamburgerIcon}
      ></label>
    </div>
  )
}
