import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import Date from '@/components/date'
import { getAllPostIds, getPostData } from '@/lib/posts'
import { generateBlogPostingSchema } from '@/lib/structured-data'

export async function generateStaticParams() {
  const paths = getAllPostIds()
  return paths.map((path) => ({
    id: path.params.id,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const { id } = await params
  const postData = await getPostData(id)

  if (!postData) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: `${postData.title} | Portfolio`,
    description: postData.title,
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const postData = await getPostData(id)

  if (!postData) {
    notFound()
  }

  const blogSchema = generateBlogPostingSchema({
    title: postData.title,
    date: postData.date,
    contentHtml: postData.contentHtml,
    id,
  })

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <article className="container">
        <h1>{postData.title}</h1>
        <Date dateString={postData.date} />
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </>
  )
}
