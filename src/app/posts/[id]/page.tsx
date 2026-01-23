import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import Date from '@/components/date'
import styles from '@/components/layout.module.css'
import { getAllPostIds, getPostData } from '@/lib/posts'
import { generateBlogPostingSchema } from '@/lib/structured-data'
import utilStyles from '@/styles/utils.module.css'

import { name } from '../../layout'

type Props = {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  const paths = await getAllPostIds()
  return paths.map((path) => ({
    id: path.params.id,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const postData = await getPostData(id)

  return {
    title: postData.title,
    description: postData.contentHtml.replace(/<[^>]*>/g, '').slice(0, 160),
    openGraph: {
      title: postData.title,
      description: postData.contentHtml.replace(/<[^>]*>/g, '').slice(0, 160),
      type: 'article',
      publishedTime: postData.date,
      authors: ['Makoto Katayori'],
    },
    twitter: {
      card: 'summary_large_image',
      title: postData.title,
      description: postData.contentHtml.replace(/<[^>]*>/g, '').slice(0, 160),
    },
  }
}

export default async function PostPage({ params }: Props) {
  const { id } = await params

  if (!id) {
    notFound()
  }

  const postData = await getPostData(id)
  const blogPostSchema = generateBlogPostingSchema({
    ...postData,
    id,
  })

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostSchema) }}
      />
      return (
      <div className={styles.container}>
        <header className={styles.header}>
          <Link href="/">
            <Image
              priority
              src="/images/profile.jpg"
              className={utilStyles.borderCircle}
              height={108}
              width={108}
              alt={name}
            />
          </Link>
          <h2 className={utilStyles.headingLg}>
            <Link
              href="/"
              className={`${utilStyles.colorInherit} ${utilStyles.gradation}`}
            >
              {name}
            </Link>
          </h2>
        </header>
        <main>
          <article>
            <h1 className={utilStyles.headingXl}>{postData.title}</h1>
            <div className={utilStyles.lightText}>
              <Date dateString={postData.date} />
            </div>
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
          </article>
        </main>
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
        <footer style={{ textAlign: 'center' }}>
          <p>© 2026 {name}</p>
        </footer>
      </div>
    </>
  )
}
