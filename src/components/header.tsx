import Link from 'next/link'
import { useRouter } from 'next/router'

import { SITE_TITLE } from './document-head'
import styles from '../styles/header.module.css'

interface NavItem {
  label: string
  path: string
}

const Header = () => {
  const { asPath } = useRouter()

  const navItems: NavItem[] = [
    { label: 'Home', path: '/' },
    { label: 'Blog', path: '/blog' },
    {
      label: 'Wishlist',
      path:
        'https://pushy-kitty-07b.notion.site/PC-3a8f8fc1fdb243649a2bbb1cbcb41f11',
    },
  ]

  return (
    <header className={styles.header}>
      <h1>
        <Link href="/" passHref>
          <a>{SITE_TITLE}</a>
        </Link>
      </h1>

      <ul>
        {navItems.map(({ label, path }) => (
          <li key={label}>
            <Link href={path} passHref>
              <a className={asPath === path ? 'active' : null}>{label}</a>
            </Link>
          </li>
        ))}
      </ul>
    </header>
  )
}

export default Header
