import Link from 'next/link'

export const NavMainNavigation = () => {
  return (
    <div className="menu_main_menu_wrapper">
      <nav aria-label="Main Navigation">
        <div role="button">
          <Link href="/">
            <a>Experience</a>
          </Link>
        </div>
        <div role="button">
          <Link href="/">
            <a>Experience</a>
          </Link>
        </div>
        <div role="button">
          <Link href="/">
            <a>Experienceaaa</a>
          </Link>
        </div>
      </nav>
    </div>
  )
}
