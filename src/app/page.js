"use client"
import styles from './page.module.css'
import "bootstrap/dist/css/bootstrap.min.css" // Import bootstrap CSS
import LoginPage from './LoginPage'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <LoginPage/>
      </div>
    </main>
  )
}
