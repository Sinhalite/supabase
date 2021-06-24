import { IconMail } from '@supabase/ui'
import Link from 'next/link'

const ROUTES = [
  { key: 'ICON', label: 'Supabase', icon: <IconMail />, link: '/' },
  { key: 'TABLE', label: 'Table Editor', icon: <IconMail />, link: '/editor' },
  { key: 'AUTH', label: 'Authentication', icon: <IconMail />, link: '/auth' },
  { key: 'STORAGE', label: 'Storage', icon: <IconMail />, link: '/storage' },
  { key: 'SQL', label: 'SQL', icon: <IconMail />, link: '/storage' },
  { key: 'API', label: 'API', icon: <IconMail />, link: '/storage' },
  { key: 'DATABASE', label: 'Database', icon: <IconMail />, link: '/storage' },
]

/**
 * Icon nav bar
 */
export default function IconBar({}) {

    /**
     * Renders all the icons
     */
  const renderNav = (routes) => {
    return routes.map((x) => (
      <li key={x.key}>
        <Link href={x.link}>
          <a className="block h-10 w-10 bg-black mx-2 mt-2 rounded text-gray-300 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-bg-alt-dark dark:hover:text-white">{x.icon}</a>
        </Link>
      </li>
    ))
  }

  return (
    <ul className="">
      {renderNav(ROUTES)}
    </ul>
  )
}
