import React from 'react'
import Link from 'next/link'

import Image from 'next/image'
import logo from '../../../public/assets/logo.png'
import { ButtonContact, HeaderContainer  } from '../../styles/HeaderStyle'

export default function Header() {
  return (
    <>
      <HeaderContainer>
    
          <Link href="/">
            <a><Image src={logo} alt="logo" /></a>
          </Link>

          <Link href="/stacks">
            <a>Habilidades</a>
          </Link>

          <Link href="/projects">
            <a>Projetos</a>
          </Link>

          <Link href="/About">
            <a>Sobre mim</a>
          </Link>

          <ButtonContact>Contato</ButtonContact>
     
      </HeaderContainer>
    </>
  )
}
