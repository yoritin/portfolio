import type { ReactNode } from 'react'

import styles from './badge.module.css'

interface BadgeProps {
  children: ReactNode
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'info'
  size?: 'small' | 'medium'
}

export default function Badge({
  children,
  variant = 'default',
  size = 'medium',
}: BadgeProps) {
  return (
    <span className={`${styles.badge} ${styles[variant]} ${styles[size]}`}>
      {children}
    </span>
  )
}
