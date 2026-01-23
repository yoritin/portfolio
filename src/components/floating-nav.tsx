'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

import styles from './floating-nav.module.css'
import { useTheme } from './theme-provider'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/skills', label: 'Skills' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

export default function FloatingNav() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const toggleTheme = () => {
    if (theme === 'system') {
      setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
    } else {
      setTheme(theme === 'dark' ? 'light' : 'dark')
    }
  }

  return (
    <div className={styles.container}>
      {/* Expanded Menu */}
      {isOpen && (
        <div className={styles.menu}>
          {/* Navigation Links */}
          <nav className={styles.navList}>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`${styles.navItem} ${pathname === item.href ? styles.active : ''}`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Theme Toggle in Menu */}
          <button
            className={styles.themeButton}
            onClick={toggleTheme}
            aria-label={`テーマを${resolvedTheme === 'dark' ? 'ライト' : 'ダーク'}モードに切り替え`}
          >
            <span className={styles.icon}>
              {resolvedTheme === 'dark' ? (
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              ) : (
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </span>
            <span className={styles.label}>
              {resolvedTheme === 'dark' ? 'Light Mode' : 'Dark Mode'}
            </span>
          </button>
        </div>
      )}

      {/* Toggle Button */}
      <button
        className={styles.button}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'メニューを閉じる' : 'メニューを開く'}
        aria-expanded={isOpen}
      >
        <span className={styles.icon}>
          {isOpen ? (
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </span>
        <span className={styles.label}>{isOpen ? 'Close' : 'Menu'}</span>
      </button>
    </div>
  )
}
