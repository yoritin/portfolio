import type { Metadata } from 'next'
import Link from 'next/link'

import Date from '@/components/date'
import Card from '@/components/ui/card'
import { getSortedPostsData } from '@/lib/posts'
import pageHeaderStyles from '@/styles/page-header.module.css'

import styles from './blog.module.css'

export const metadata: Metadata = {
  title: 'Blog | Portfolio',
  description: '技術ブログ・記事一覧',
}

export default async function BlogPage() {
  const allPostsData = await getSortedPostsData()

  return (
    <div className={pageHeaderStyles.container}>
      <header className={pageHeaderStyles.header}>
        <h1 className={pageHeaderStyles.title}>
          <span className={pageHeaderStyles.titleGradient}>Blog</span>
        </h1>
        <p className={pageHeaderStyles.description}>技術記事とブログ</p>
      </header>

      <div className={styles.grid}>
        {allPostsData.map(({ id, date, title }) => (
          <Link key={id} href={`/blog/${id}`} className={styles.link}>
            <Card hover>
              <h2 className={styles.postTitle}>{title}</h2>
              <div className={styles.date}>
                <Date dateString={date} />
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
