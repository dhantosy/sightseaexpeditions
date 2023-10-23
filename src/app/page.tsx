import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.image}>
        <Image
          className={styles.logo}
          src="/assets/images/logo.jpg"
          alt="Sightsea Expeditions Logo"
          sizes={`100vw, 33vw`}
          priority
          width='400'
          height='319'
          layout='responsive'
        />
      </div>
      <h1 className={styles.title}>Sailing Soon</h1>
    </main>
  )
}
