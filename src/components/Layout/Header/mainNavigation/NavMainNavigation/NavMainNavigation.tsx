import Link from 'next/link'

export const NavMainNavigation = () => {
  const displayDesign = 'lalalala'
  return (
    <div className="menu_main_menu_wrapper">
      <nav aria-label="Main Navigation">
        <div role="button">
          <Link href="/">
            <a>Experienceaaa</a>
          </Link>
        </div>
        <div role="button">
          <Link href="/">
            <a>Experienceaaa</a>
          </Link>
        </div>
        <div role="button">
          <Link href="/">
            <a>Experienceaaa</a>
          </Link>
        </div>

        <div role="button">Show me {displayDesign ?? '___________'}</div>
      </nav>
    </div>
  )
}
