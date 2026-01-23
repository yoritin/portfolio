import type { Metadata } from 'next'
import Link from 'next/link'

import Badge from '@/components/ui/badge'
import Button from '@/components/ui/button'
import Card from '@/components/ui/card'
import { getAllProjects } from '@/data/projects'
import pageHeaderStyles from '@/styles/page-header.module.css'

import styles from './projects.module.css'

export const metadata: Metadata = {
  title: 'Projects | Portfolio',
  description: '制作物・プロジェクト一覧',
}

export default function ProjectsPage() {
  const projects = getAllProjects()

  return (
    <div className={pageHeaderStyles.container}>
      <header className={pageHeaderStyles.header}>
        <h1 className={pageHeaderStyles.title}>
          <span className={pageHeaderStyles.titleGradient}>Projects</span>
        </h1>
        <p className={pageHeaderStyles.description}>制作物とプロジェクト一覧</p>
      </header>
      <div className={styles.grid}>
        {projects.map((project) => (
          <Card key={project.id} className={styles.projectCard}>
            <div className={styles.cardContent}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.period}>{project.period}</p>
              <p className={styles.projectDescription}>{project.description}</p>
              <p className={styles.role}>
                <strong>Role:</strong> {project.role}
              </p>
              <div className={styles.technologies}>
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="primary" size="small">
                    {tech}
                  </Badge>
                ))}
              </div>
              <div className={styles.links}>
                {project.links.website && (
                  <a
                    href={project.links.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.externalLink}
                  >
                    🌐 Website
                  </a>
                )}
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.externalLink}
                  >
                    💻 GitHub
                  </a>
                )}
                {project.links.demo && (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.externalLink}
                  >
                    🎬 Demo
                  </a>
                )}
              </div>
              <div className={styles.viewMore}>
                <Link href={`/projects/${project.id}`}>View more →</Link>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
