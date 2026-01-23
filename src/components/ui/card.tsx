import type { ReactNode } from 'react'

import styles from './card.module.css'

interface CardProps {
  children: ReactNode
  hover?: boolean
  className?: string
}

export default function Card({
  children,
  hover = false,
  className = '',
}: CardProps) {
  return (
    <div className={`${styles.card} ${hover ? styles.hover : ''} ${className}`}>
      {children}
    </div>
  )
}
