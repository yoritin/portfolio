import type { Metadata } from 'next'

import { getAllCareers } from '@/data/career'
import pageHeaderStyles from '@/styles/page-header.module.css'

import styles from './about.module.css'

export const metadata: Metadata = {
  title: 'About | Portfolio',
  description: 'ソフトウェアエンジニア 片寄真実のプロフィールと職務経歴',
}

export default function AboutPage() {
  const careers = getAllCareers()

  return (
    <div className={pageHeaderStyles.container}>
      <header className={pageHeaderStyles.header}>
        <h1 className={pageHeaderStyles.title}>
          <span className={pageHeaderStyles.titleGradient}>About Me</span>
        </h1>
        <p className={pageHeaderStyles.description}>
          ソフトウェアエンジニアとしてのプロフィールと職務経歴
        </p>
      </header>

      <section className={pageHeaderStyles.section}>
        <h2 className={pageHeaderStyles.sectionTitle}>Profile</h2>
        <div className={styles.profileText}>
          <p>
            ソフトウェアエンジニアとして、Web開発を中心に幅広い技術領域に携わっています。
          </p>
          <p>
            2020年8月からフリーランスエンジニアとして活動し、不動産関連Webサービス（Next.js
            +
            GraphQL）、飲食店向けモバイルオーダーシステム（Vue2→Vue3移行）、BtoB
            SaaSプラットフォーム（Next.js +
            TypeScript）など、様々なプロジェクトに参加してきました。
          </p>
          <p>
            バックエンド、フロントエンド、インフラまで幅広く対応可能。特にフロントエンド開発においては、モダンなSPA開発、テスト設計、リファクタリング、モノレポ運用などの経験があります。
          </p>
        </div>
      </section>

      <section className={pageHeaderStyles.section}>
        <h2 className={pageHeaderStyles.sectionTitle}>Career</h2>

        <div className={styles.timeline}>
          {careers.map((career) => (
            <article key={career.id} className={styles.timelineItem}>
              <div className={styles.timelineDot} />

              <div className={styles.careerCard}>
                {/* Period */}
                <div className={styles.careerHeader}>
                  <div className={styles.periodInfo}>
                    <span>{career.period}</span>
                    <span>•</span>
                    <span>{career.duration}</span>
                  </div>
                </div>

                {/* Project Info */}
                <div className={styles.projectInfo}>
                  <h3 className={styles.projectTitle}>{career.project}</h3>
                  <p className={styles.roleText}>{career.role}</p>
                </div>

                {/* Description */}
                {career.description && (
                  <p className={styles.description}>{career.description}</p>
                )}

                {/* Responsibilities */}
                <div className={styles.infoSection}>
                  <h5 className={styles.infoTitle}>担当業務</h5>
                  <ul className={styles.tagList}>
                    {career.responsibilities.map((resp, index) => (
                      <li
                        key={index}
                        className={`${styles.tag} ${styles.responsibilityTag}`}
                      >
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className={styles.infoSection}>
                  <h5 className={styles.infoTitle}>技術スタック</h5>
                  <ul className={styles.tagList}>
                    {career.technologies.map((tech, index) => (
                      <li
                        key={index}
                        className={`${styles.tag} ${styles.techTag}`}
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
