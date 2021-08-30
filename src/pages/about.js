import React from 'react'
import { Container, DivMain, DivIcons } from '../styles/AboutStyles'
import Header from '../components/Header/Header'
import { Github, Linkedin } from '@styled-icons/boxicons-logos/'


export default function about() {
  return (
    <>
      <Header />
      <Container>
        <DivMain>
          <h2>Daniel Cunha</h2>
          <p>Sou um desenvolvedor FrontEnd Júnior
            em busca da minha primeira experiência na área. Atualmente desenvolvo
            projetos em linguagens como JavaScript, Css, Html tendo foco em
            Frameworks como React e VueJs, recentemente desenvolvi um
            CRUD em NextJs,desde a layout até backend
          </p>
        </DivMain>
        
        <DivIcons>
        <a href="https://www.linkedin.com/in/daniel-cunha001/">
          <Linkedin size="40" />
        </a>

        <a href="https://github.com/dandankara">
          <Github size="40" />
        </a>
        </DivIcons>
        
        
      </Container>
      
    </>
  )
}
