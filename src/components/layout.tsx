import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { ReactNode, VFC } from 'react'

import utilStyles from '@/styles/utils.module.css'

import styles from './layout.module.css'

const name = 'Makoto Katayori'
export const siteTitle = 'Yori Portfolio'

type Props = {
  children: ReactNode
  home?: boolean
}

const Layout: VFC<Props> = ({ children, home }) => {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Yori Portfolio" />
        <meta
          property="og:image"
          content="https://nextjs-blog-yoritin.vercel.app/twitter-card.jpg"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/profile.jpg"
              className={`${utilStyles.borderCircle} ${utilStyles.spin}`}
              height={144}
              width={144}
              alt={name}
            />
            <h1 className={`${utilStyles.heading2Xl} ${utilStyles.gradation}`}>
              {name}
            </h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/profile.jpg"
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}

export default Layout
