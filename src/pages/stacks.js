import { ContainerFlex, ItemFlex } from '../styles/StackStyles'

import {
  Html5,
  Css3,
  Javascript,
  ReactLogo
} from '@styled-icons/boxicons-logos'

import {NextDotJs, StyledComponents} from '@styled-icons/simple-icons/'

export default function Stacks() {
  return (
    <ContainerFlex>

      <ItemFlex >
        <p>Html</p>
        <Html5 size="32" />
      </ItemFlex>

      <ItemFlex >
        <p>Css</p>
        <Css3 size="32" />
      </ItemFlex>

      <ItemFlex >
        <p>Javascript</p>
        <Javascript size="32" />
      </ItemFlex>

      <ItemFlex >
        <p>React</p>
        <ReactLogo size="32" />
      </ItemFlex>

      <ItemFlex >
        <p>NextJs</p>
        <NextDotJs size="32" />
      </ItemFlex>

      <ItemFlex >
        <p>Styled-Components</p>
        <StyledComponents size="32" />
      </ItemFlex>

    </ContainerFlex>
  )
}