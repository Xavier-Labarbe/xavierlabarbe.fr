import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Xavier Labarbe</title>
        <meta name="description" content="Mon site Web" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/xl.svg" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Xavier Labarbe -&nbsp;
            <code className={styles.code}>Développeur Web</code>
          </p>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Je host mes sites avec{' '}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <div className={styles.thirteen}>
            <Image
              src="/xl.svg"
              alt="13"
              width={40}
              height={31}
              priority
            />
          </div>
        </div>


        <div className={styles.grid}>
          <a
            href="/myself"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Xavier <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Des infos sur moi, ma personnalité et mes hobbies.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Projets <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Retrouvez mon porte-folio contenant mes différents projets.
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Parcours <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Mes formations et mes expériences professionnelles.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Skills <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Une étendue de mes compétences et mon savoir-faire.
            </p>
          </a>
        </div>
      </main>
    </>
  )
}
