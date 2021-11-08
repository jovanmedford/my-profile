import React from "react"
import "twin.macro"
import { GithubIcon, LinkedInIcon } from "../../images/icons"
export const Footer = () => {
  return (
    <footer tw="mt-24 bg-primary-500 pt-4 pb-2 pl-4 flex justify-center items-end">
      <div tw="text-center flex justify-center text-white items-center">
        <GithubIcon tw="mr-4" />
        <LinkedInIcon />
      </div>
      <p tw="text-center text-white ml-4 font-bold"> | By Jovan Medford</p>
    </footer>
  )
}
