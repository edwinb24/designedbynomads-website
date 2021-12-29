import { designsAvailable } from '@/constants/values'
import cookie from 'js-cookie'
import Link from 'next/link'

export const NavMainNavigation = () => {
  const displayDesign = null
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

        <div
          role="button"
          onClick={() => cookie.set('designStyle', 'TEST', { expires: 1 / 24 })}
        >
          Show me {displayDesign ?? designsAvailable[0]}
        </div>
      </nav>
    </div>
  )
}
