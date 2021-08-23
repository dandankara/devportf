import Header from '../components/Header/Header'
import MainContent from '../components/Main/MainContent'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <MainContent />
    </div>
  )
}
