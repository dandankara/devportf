import React from 'react'
import styles from '../../styles/Header.module.css'
import Link from 'next/link'

import Image from 'next/image'
import logo from '../../../public/assets/logo.png'

export default function Header() {
  return (
    <div className={styles.Container}>

      <section className={styles.SectionLink}>
        <Image src={logo} alt="logo" />

        <Link href="/stacks">
          <a>Stacks</a>
        </Link>

        <Link href="/projects">
          <a>Projects</a>
        </Link>

        <Link href="/About">
          <a>About me</a>
        </Link>

        <button className={styles.ButtonContact}>Contact</button>
      </section>
    </div>
  )
}
