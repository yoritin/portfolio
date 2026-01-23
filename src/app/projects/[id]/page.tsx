import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import ExternalLinkIcon from '@/components/icons/external-link'
import GitHubIcon from '@/components/icons/github'
import PlayIcon from '@/components/icons/play'
import Badge from '@/components/ui/badge'
import Button from '@/components/ui/button'
import Card from '@/components/ui/card'
import { getAllProjects, getProjectById } from '@/data/projects'

import styles from './project-detail.module.css'

export async function generateStaticParams() {
  const projects = getAllProjects()
  return projects.map((project) => ({
    id: project.id,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const { id } = await params
  const project = getProjectById(id)

  if (!project) {
    return {
      title: 'Project Not Found',
    }
  }

  return {
    title: `${project.title} | Portfolio`,
    description: project.description,
  }
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const project = getProjectById(id)

  if (!project) {
    notFound()
  }

  return (
    <div className="container">
      <Link href="/projects" className={styles.backLink}>
        ← プロジェクト一覧に戻る
      </Link>

      <div className={styles.header}>
        <h1 className={styles.title}>{project.title}</h1>
        <p className={styles.period}>{project.period}</p>
      </div>

      <Card className={styles.mainContent}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>概要</h2>
          <p className={styles.description}>{project.description}</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>担当範囲</h2>
          <p className={styles.role}>{project.role}</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>使用技術</h2>
          <div className={styles.technologies}>
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="info" size="medium">
                {tech}
              </Badge>
            ))}
          </div>
        </section>

        {(project.links.website ||
          project.links.github ||
          project.links.marketplace) && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>リンク</h2>
            <div className={styles.links}>
              {project.links.website && (
                <Button
                  href={project.links.website}
                  variant="primary"
                  size="medium"
                  icon={<ExternalLinkIcon />}
                >
                  Website
                </Button>
              )}
              {project.links.github && (
                <Button
                  href={project.links.github}
                  variant="outline"
                  size="medium"
                  icon={<GitHubIcon />}
                >
                  GitHub
                </Button>
              )}
              {project.links.marketplace && (
                <Button
                  href={project.links.marketplace}
                  variant="outline"
                  size="medium"
                  icon={<ExternalLinkIcon />}
                >
                  Marketplace
                </Button>
              )}
            </div>
          </section>
        )}
      </Card>
    </div>
  )
}
