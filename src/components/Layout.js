import React from "react"
import { GlobalStyles } from "twin.macro"

export default function ({ children, ...rest }) {
  return (
    <div {...rest}>
      <GlobalStyles />
      {children}
    </div>
  )
}
