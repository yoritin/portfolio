import styles from '@/components/layout.module.css'
import utilStyles from '@/styles/utils.module.css'

export default function Loading() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div
          className={`${utilStyles.borderCircle} ${styles.skeleton}`}
          style={{ width: 108, height: 108 }}
        />
        <div
          className={styles.skeleton}
          style={{ width: 250, height: 32, marginTop: 16 }}
        />
      </header>
      <main>
        <article>
          <div
            className={styles.skeleton}
            style={{ width: '80%', height: 40, marginBottom: 16 }}
          />
          <div
            className={styles.skeleton}
            style={{ width: 150, height: 20, marginBottom: 24 }}
          />
          <div className={styles.skeleton} style={{ height: 300 }} />
        </article>
      </main>
    </div>
  )
}
