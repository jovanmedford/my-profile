import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

export default function() {
  return (
  <header>
  </header>
  )
}


Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
