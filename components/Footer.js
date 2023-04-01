import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <img src="/sackboy.ico" alt="sackboy" className={styles.logo} />
      </footer>
    </>
  )
}
