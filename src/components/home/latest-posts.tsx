import Link from 'next/link'

import Date from '@/components/date'
import Card from '@/components/ui/card'
import { getSortedPostsData } from '@/lib/posts'

import styles from './latest-posts.module.css'

export default async function LatestPosts() {
  const allPostsData = await getSortedPostsData()
  const latestPosts = allPostsData.slice(0, 3)

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Latest Blog Posts</h2>
        <p className={styles.description}>最新の記事</p>
        <div className={styles.grid}>
          {latestPosts.map(({ id, date, title }) => (
            <Link key={id} href={`/blog/${id}`} className={styles.link}>
              <Card hover>
                <h3 className={styles.postTitle}>{title}</h3>
                <p className={styles.date}>
                  <Date dateString={date} />
                </p>
              </Card>
            </Link>
          ))}
        </div>
        <div className={styles.viewAll}>
          <Link href="/blog" className={styles.viewAllLink}>
            View All Posts →
          </Link>
        </div>
      </div>
    </section>
  )
}
