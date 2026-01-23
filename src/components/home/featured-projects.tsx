import Link from 'next/link'

import Badge from '@/components/ui/badge'
import Card from '@/components/ui/card'
import { getFeaturedProjects } from '@/data/projects'

import styles from './featured-projects.module.css'

export default function FeaturedProjects() {
  const projects = getFeaturedProjects()

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Featured Projects</h2>
        <p className={styles.description}>主要な制作物とプロジェクト</p>
        <div className={styles.grid}>
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              className={styles.link}
            >
              <Card hover>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>
                  {project.description}
                </p>
                <div className={styles.technologies}>
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="primary" size="small">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
