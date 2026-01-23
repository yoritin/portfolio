export function generatePersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Makoto Katayori',
    url: 'https://portfolio-yoritin.vercel.app',
    sameAs: [
      // Add your social media profiles here
      // 'https://twitter.com/yourhandle',
      // 'https://github.com/yoritin',
    ],
    jobTitle: 'Software Developer',
  }
}

export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Makoto Katayori Portfolio',
    url: 'https://portfolio.plantslog.com',
    description: 'Personal portfolio and blog',
    author: {
      '@type': 'Person',
      name: 'Makoto Katayori',
    },
  }
}

export function generateBlogPostingSchema(post: {
  title: string
  date: string
  contentHtml: string
  id: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Person',
      name: 'Makoto Katayori',
    },
    publisher: {
      '@type': 'Person',
      name: 'Makoto Katayori',
    },
    url: `https://portfolio.plantslog.com/posts/${post.id}`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://portfolio.plantslog.com/posts/${post.id}`,
    },
  }
}
