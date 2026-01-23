import type { Metadata } from 'next'

import Card from '@/components/ui/card'
import pageHeaderStyles from '@/styles/page-header.module.css'

import styles from './contact.module.css'

export const metadata: Metadata = {
  title: 'Contact | Portfolio',
  description: 'お問い合わせ',
}

export default function ContactPage() {
  return (
    <div className={pageHeaderStyles.container}>
      <header className={pageHeaderStyles.header}>
        <h1 className={pageHeaderStyles.title}>
          <span className={pageHeaderStyles.titleGradient}>Contact</span>
        </h1>
        <p className={pageHeaderStyles.description}>お問い合わせはこちらから</p>
      </header>

      <div className={styles.content}>
        <Card className={styles.card}>
          <h2 className={styles.cardTitle}>お問い合わせフォーム</h2>
          <p className={styles.cardDescription}>
            プロジェクトのご相談やお仕事の依頼など、お気軽にお問い合わせください。
          </p>
          <a
            href="https://forms.gle/vnQKqjfDH5FExHP17"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.formLink}
          >
            Google フォームで問い合わせる →
          </a>
        </Card>

        <Card className={styles.card}>
          <h2 className={styles.cardTitle}>SNS・リンク</h2>
          <p className={styles.cardDescription}>
            各種SNSでも情報発信しています。
          </p>
          <ul className={styles.socialLinks}>
            <li>
              <a
                href="https://github.com/yoritin"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                <span className={styles.socialIcon}>💻</span>
                <span>GitHub</span>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/yoriblog"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                <span className={styles.socialIcon}>🐦</span>
                <span>Twitter</span>
              </a>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  )
}
