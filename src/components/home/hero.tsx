import Image from 'next/image'

import Button from '@/components/ui/button'

import styles from './hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <div className={styles.imageWrapper}>
          <Image
            priority
            src="/images/profile.jpg"
            className={styles.profileImage}
            height={200}
            width={200}
            alt="Profile"
          />
        </div>
        <h1 className={styles.title}>
          Hi, I'm <span className={styles.gradient}>Yoritin</span>
        </h1>
        <p className={styles.subtitle}>
          植物を愛するWebエンジニア 🌱
          <br />
          フロントエンド / バックエンド / インフラまで幅広く対応
        </p>
        <div className={styles.buttons}>
          <Button href="/projects" variant="primary" size="large">
            View Projects
          </Button>
          <Button href="/contact" variant="outline" size="large">
            Contact Me
          </Button>
        </div>
      </div>
    </section>
  )
}
