import Badge from '@/components/ui/badge'
import { getAllSkills } from '@/data/skills'

import styles from './skills-preview.module.css'

export default function SkillsPreview() {
  const skillCategories = getAllSkills()

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Tech Stack</h2>
        <p className={styles.description}>使用技術とスキル</p>
        <div className={styles.categories}>
          {skillCategories.map((category) => (
            <div key={category.category} className={styles.category}>
              <h3 className={styles.categoryTitle}>
                <span className={styles.icon}>{category.icon}</span>
                {category.category}
              </h3>
              <div className={styles.skills}>
                {category.skills.map((skill) => (
                  <Badge key={skill.name} variant="info" size="medium">
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
