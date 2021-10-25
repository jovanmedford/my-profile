import React from "react"
import { StaticImage } from "gatsby-plugin-image"

export default function ({ className }) {
  return <StaticImage className={className} src="../images/logo.png" />
}
