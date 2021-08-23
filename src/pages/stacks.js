import styles from '../styles/Stacks.module.css'

export default function Stacks(){
  return(
    <div className={styles.Container}>
      <div className={styles.items}><h1>Html</h1> </div>
      <div className={styles.items}><h1>JavasScript</h1> </div>
      <div className={styles.items}><h1>Css</h1> </div>
      <div className={styles.items}><h1>React</h1> </div>
      <div className={styles.items}><h1>NextJs</h1> </div>
      <div className={styles.items}><h1>Styled Components</h1> </div>
    </div>
  )
}