import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { ReactNode, VFC } from 'react'

import utilStyles from '@/styles/utils.module.css'

import styles from './layout.module.css'

type Props = {
  children: ReactNode
  home?: boolean
}
export const name = 'Makoto Katayori'

const Layout: VFC<Props> = ({ children, home }) => {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={name} />
        <meta
          property="og:image"
          content="https://nextjs-blog-yoritin.vercel.app/twitter-card.jpg"
        />
        <meta name="og:title" content={name} />
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
                <a
                  className={`${utilStyles.colorInherit} ${utilStyles.gradation}`}
                >
                  {name}
                </a>
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
      <footer style={{ textAlign: 'center' }}>
        <p>© 2023 My Website</p>
      </footer>
    </div>
  )
}

export default Layout
