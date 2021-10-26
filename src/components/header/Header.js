import * as React from "react"
import Logo from "./Logo"
import Bars from "./Bars"
import tw from "twin.macro"

export default function () {
  return (
    <HeaderContainer>
      <Logo tw="w-20" />
      <ul>
        <a tw="hidden md:inline text-md mr-8">About Me</a>
        <a tw="hidden md:inline text-md">Portfolio</a>
      </ul>
      <ContactButton>Contact Me</ContactButton>
      <Bars tw="block md:hidden" />
    </HeaderContainer>
  )
}

const xMargin = "mx-4 md:mx-12"

const HeaderContainer = tw("header")`
  ${xMargin} mt-12 mb-36
  flex justify-between items-center
`

const ContactButton = tw("a")`
  hidden md:inline bg-primary-500 pt-4 pb-3 px-4
  text-white text-md
`
