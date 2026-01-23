'use client'

import Link from 'next/link'
import { useEffect } from 'react'

import styles from '@/components/layout.module.css'
import utilStyles from '@/styles/utils.module.css'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className={styles.container}>
      <main style={{ textAlign: 'center', padding: '4rem 0' }}>
        <h1 className={utilStyles.headingXl}>エラーが発生しました</h1>
        <p className={utilStyles.headingMd} style={{ marginTop: '1rem' }}>
          申し訳ございません。問題が発生しました。
        </p>
        <div
          style={{
            marginTop: '2rem',
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
          }}
        >
          <button
            onClick={reset}
            style={{
              padding: '0.5rem 1rem',
              borderRadius: '4px',
              border: '1px solid #0070f3',
              background: '#0070f3',
              color: 'white',
              cursor: 'pointer',
            }}
          >
            再試行
          </button>
          <Link href="/" className={utilStyles.colorInherit}>
            ホームに戻る
          </Link>
        </div>
      </main>
    </div>
  )
}
