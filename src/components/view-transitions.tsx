'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useRef } from 'react'

export function ViewTransitions() {
  const pathname = usePathname()
  const previousPathname = useRef(pathname)

  useEffect(() => {
    // Skip on initial mount
    if (previousPathname.current === pathname) {
      previousPathname.current = pathname
      return
    }

    // Update previous pathname
    previousPathname.current = pathname

    // View Transitions API is handled by CSS pseudo-elements
    // This component only tracks pathname changes
  }, [pathname])

  return null
}
