import Link from 'next/link'
import type { ReactNode } from 'react'

import styles from './button.module.css'

interface ButtonProps {
  children: ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'small' | 'medium' | 'large'
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
}

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  type = 'button',
  icon,
  iconPosition = 'left',
}: ButtonProps) {
  const className = `${styles.button} ${styles[variant]} ${styles[size]}`

  const content = (
    <>
      {icon && iconPosition === 'left' && icon}
      {children}
      {icon && iconPosition === 'right' && icon}
    </>
  )

  if (href) {
    return (
      <Link href={href} className={className}>
        {content}
      </Link>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={className}
    >
      {content}
    </button>
  )
}
