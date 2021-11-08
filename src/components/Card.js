import React from "react"
import { Link } from "gatsby"
import "twin.macro"

export default function ({ ImageComponent, title, to, className }) {
  return (
    <Link to={to} tw="block mb-11 lg:mb-0" className={className}>
      <ImageComponent />
      <h3 tw="text-center mt-8 md:text-lg">{title}</h3>
    </Link>
  )
}
