import Link from 'next/link'

import styles from '@/components/layout.module.css'
import utilStyles from '@/styles/utils.module.css'

export default function NotFound() {
  return (
    <div className={styles.container}>
      <main style={{ textAlign: 'center', padding: '4rem 0' }}>
        <h1 className={utilStyles.headingXl}>404</h1>
        <p className={utilStyles.headingMd} style={{ marginTop: '1rem' }}>
          ページが見つかりませんでした
        </p>
        <div style={{ marginTop: '2rem' }}>
          <Link href="/" className={utilStyles.colorInherit}>
            ← ホームに戻る
          </Link>
        </div>
      </main>
    </div>
  )
}
