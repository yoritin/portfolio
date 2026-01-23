import styles from '@/components/layout.module.css'
import utilStyles from '@/styles/utils.module.css'

export default function Loading() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div
          className={`${utilStyles.borderCircle} ${styles.skeleton}`}
          style={{ width: 144, height: 144 }}
        />
        <div
          className={styles.skeleton}
          style={{ width: 300, height: 48, marginTop: 16 }}
        />
      </header>
      <main>
        <section>
          <div
            className={styles.skeleton}
            style={{ width: 150, height: 32, marginBottom: 16 }}
          />
          <div className={styles.skeleton} style={{ height: 100 }} />
        </section>
        <section style={{ marginTop: 32 }}>
          <div
            className={styles.skeleton}
            style={{ width: 100, height: 32, marginBottom: 16 }}
          />
          <div className={styles.skeleton} style={{ height: 200 }} />
        </section>
      </main>
    </div>
  )
}
