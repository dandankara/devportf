import styles from '../../styles/MainContent.module.css'

import Resume from '../../../public/assets/ResumeCv.png'

import Image from 'next/image'

export default function MainContent() {
  return (
    <div className={styles.DivContainer}>

      <div className={styles.AboutMe}>
        <h3>Desenvolvedor FrontEnd</h3>
        <h1>Daniel Cunha</h1>

        <div className={styles.TextAbout}>
          <p>Bem vindo(a).
            Aqui é onde mostro todas as minhas
            habilidades ao longo da minha jornada na tecnologia
          </p>
        </div>

        <button className={styles.ButtonMyCv}>My Cv</button>
      </div>

      <div className={styles.DivBackground}>
        <div>
          <Image src={Resume}  alt='Resume' />
        </div>
      </div>
    </div>
  )
}