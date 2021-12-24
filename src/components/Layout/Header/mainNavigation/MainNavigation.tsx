function toogleHamburgerIcon() {
  const hamburger_icon = document.getElementsByClassName('hamburger-icon')[0]
  hamburger_icon.classList.toggle('change')
}

export const MainNavigation = () => {
  return (
    <div className="MainNavigation">
      <input
        type="checkbox"
        id="toggle-main-menu"
        role="button"
        aria-label="Toggle Menu"
      />
      <label
        className="menuOn"
        htmlFor="toggle-main-menu"
        onClick={toogleHamburgerIcon}
      >
        <div className="hamburger-icon">
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
      </label>
      <nav className="mainNavigation" aria-label="Main Navigation">
        <div role="button">
          <a href="#">Experience</a>
        </div>
        <div role="button">
          <a href="#">Portfolio</a>
        </div>
        <div role="button">
          <a href="#">Tutorials</a>
        </div>
      </nav>
      <label
        className="menu-off"
        htmlFor="toggle-main-menu"
        onClick={toogleHamburgerIcon}
      ></label>
    </div>
  )
}
