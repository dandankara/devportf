import { Back, ContainerFlex, ItemFlex } from '../styles/StackStyles'
import Image from 'next/image'
import {
  Html5,
  Css3,
  Javascript,
  ReactLogo,
} from '@styled-icons/boxicons-logos'

import NextIcon from '../../public/Icons/nextdotjs.svg'
import Styled from '../../public/Icons/styledcomponents.svg'
import Header from '../components/Header/Header'

export default function Stacks() {
  return (
    <>
    <Header />
    <ContainerFlex>
      
      <ItemFlex >
        <p>Html</p>
        <Html5 size="80" color="#E34F26" />
        <hr />
      </ItemFlex>

      <ItemFlex >
        <p>Css</p>
        <Css3 size="80" color="#1572B6"  />
        <hr />
      </ItemFlex>

      <ItemFlex >
        <p>Javascript</p>
        <Javascript size="80" color="#F7DF1E" />
        <hr />
      </ItemFlex>

      <ItemFlex >
        <p>React</p>
        <ReactLogo size="80" color="#61DAFB" />
        <hr />
      </ItemFlex>

      <ItemFlex >
        <p>NextJs</p>
        <Image src={NextIcon} alt="NextIcon" width="80" height="80"/>
        <hr />
      </ItemFlex>

      <ItemFlex >
        <p>Styled</p>
        <Image src={Styled} alt="NextIcon" width="80" height="80"/>
        <hr />
      </ItemFlex>

    </ContainerFlex>
    </>
  )
}