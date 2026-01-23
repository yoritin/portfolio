import FeaturedProjects from '@/components/home/featured-projects'
import Hero from '@/components/home/hero'
import LatestPosts from '@/components/home/latest-posts'
import SkillsPreview from '@/components/home/skills-preview'
import {
  generatePersonSchema,
  generateWebSiteSchema,
} from '@/lib/structured-data'

export default async function HomePage() {
  const personSchema = generatePersonSchema()
  const websiteSchema = generateWebSiteSchema()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <Hero />
      <FeaturedProjects />
      <SkillsPreview />
      <LatestPosts />
    </>
  )
}
