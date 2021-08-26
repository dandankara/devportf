import { DivAbout, ImageCv, Main } from '../../styles/MainStyle'

import Resume from '../../../public/assets/ResumeCv.png'

import Image from 'next/image'

export default function MainContent() {
  return (

    <Main>
      <DivAbout>
        <h3>Desenvolvedor FrontEnd</h3>
        <h1>Daniel Cunha</h1>
        <p>Bem vindo(a).Aqui é onde mostro todas as minhas
          habilidades ao longo da minha jornada da tecnologia
        </p>
      </DivAbout>

      <ImageCv><Image src={Resume} alt='Resume' /></ImageCv>
    </Main>

  )
}