import * as React from "react"
import Seo from "../components/seo"
import Layout from "../components/Layout"
import "twin.macro"
export default function () {
  return (
    <Layout>
      <Seo title="Jovan Medford" />
      <div tw="mx-4">
        <h1 tw="text-2xl font-bold text-center">
          I design and build beautiful web apps.
        </h1>
      </div>
    </Layout>
  )
}
