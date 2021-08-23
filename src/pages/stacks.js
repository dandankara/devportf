import Html from '../../public/Icons/html5.svg'
import Css from '../../public/Icons/css3.svg'
import Javascript from '../../public/Icons/javascript.svg'
import React from '../../public/Icons/react.svg'
import NextJs from '../../public/Icons/nextdotjs.svg'
import Styled from '../../public/Icons/styledcomponents.svg'

import styles from '../styles/Stacks.module.css';
import Image from 'next/image';

export default function Stacks() {
  return (
    <div className={styles.Container}>

      <span>
        <h1>Html</h1>
        <Image src={Html} alt="html" />
      </span>

      <span>
      <h1>Css</h1>
      <Image src={Css} alt="css" />
      </span>


      <span>
      <h1>Javascript</h1>
      <Image src={Javascript} alt="javascript" />
      </span>


      <span>
      <h1>React</h1>
      <Image src={React} alt="react" />
      </span>


      <span>
      <h1>NextJs</h1>
      <Image src={NextJs} alt="next" />
      </span>


      <span>
      <h1>Styled Components</h1>
      <Image src={Styled} alt="styled" />
      </span>

    </div>
  )
}