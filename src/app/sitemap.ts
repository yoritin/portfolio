import { MetadataRoute } from 'next'

import { getAllPostIds } from '@/lib/posts'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://portfolio.plantslog.com'

  // Get all blog posts
  const posts = await getAllPostIds()
  const postUrls = posts.map((post) => ({
    url: `${baseUrl}/posts/${post.params.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...postUrls,
  ]
}
