import React from "react"
import { Link } from "gatsby"
import "twin.macro"

export default function ({ ImageComponent, title, link, className }) {
  return (
    <Link to={link} tw="block mb-11 lg:mb-0" className={className}>
      <ImageComponent />
      <h3 tw="text-center mt-8">{title}</h3>
    </Link>
  )
}
