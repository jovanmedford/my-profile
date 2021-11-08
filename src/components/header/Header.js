import * as React from "react"
import Logo from "./Logo"
import Bars from "./Bars"
import tw from "twin.macro"

export default function () {
  return (
    <HeaderContainer>
      <Logo tw="w-20" />
      <ul>
        <a href="/#about-me" tw="mr-4 text-base md:inline text-md md:mr-8">
          About Me
        </a>
        <a href="/#portfolio" tw="text-base md:inline text-md">
          Portfolio
        </a>
      </ul>
      <ContactButton>Contact Me</ContactButton>
    </HeaderContainer>
  )
}

const xMargin = "mx-4 md:mx-12"

const HeaderContainer = tw("header")`
  ${xMargin} mt-12 max-w-4xl lg:mx-auto
  flex justify-between items-center
`

const ContactButton = tw("a")`
  text-base md:inline bg-primary-500 pt-4 pb-3 px-4
  text-white md:text-md
`
