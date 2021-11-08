import React from "react"
import { GlobalStyles } from "twin.macro"
import Header from "./header/Header"
import { Footer } from "./footer/footer"

export default function ({ children, ...rest }) {
  return (
    <div {...rest}>
      <GlobalStyles />
      <Header />
      {children}
      <Footer />
    </div>
  )
}
