import type { Metadata } from 'next'

import Badge from '@/components/ui/badge'
import Card from '@/components/ui/card'
import { getAllSkills } from '@/data/skills'
import pageHeaderStyles from '@/styles/page-header.module.css'

import styles from './skills.module.css'

export const metadata: Metadata = {
  title: 'Skills | Portfolio',
  description: '技術スタック・スキル一覧',
}

export default function SkillsPage() {
  const skillCategories = getAllSkills()

  return (
    <div className={pageHeaderStyles.container}>
      <header className={pageHeaderStyles.header}>
        <h1 className={pageHeaderStyles.title}>
          <span className={pageHeaderStyles.titleGradient}>Skills</span>
        </h1>
        <p className={pageHeaderStyles.description}>技術スタックとスキル一覧</p>
      </header>

      <div className={styles.categories}>
        {skillCategories.map((category) => (
          <Card key={category.category} className={styles.category}>
            <h2 className={styles.categoryTitle}>
              <span className={styles.icon}>{category.icon}</span>
              {category.category}
            </h2>
            <div className={styles.skills}>
              {category.skills.map((skill) => (
                <Badge
                  key={skill.name}
                  variant={
                    skill.level === 'expert' || skill.level === 'advanced'
                      ? 'primary'
                      : 'default'
                  }
                  size="medium"
                >
                  {skill.name}
                </Badge>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
