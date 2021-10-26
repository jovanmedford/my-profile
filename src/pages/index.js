import * as React from "react"
import Seo from "../components/seo"
import Layout from "../components/Layout"
import { susuImage, caribbeanScholarImage } from "../utils/staticImages"
import Card from "../components/Card"
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
      <section tw="mt-28">
        <h2 tw="text-center text-lg md:text-xl font-bold mb-6">Portfolio</h2>
        <div tw="mx-4 md:flex md:mx-12 lg:mx-auto justify-between max-w-4xl ">
          <Card
            tw="lg:w-6/12 mr-8"
            ImageComponent={susuImage}
            title="SUSU Magazine"
          />
          <Card
            tw="lg:w-6/12"
            ImageComponent={caribbeanScholarImage}
            title="Caribbean Scholar"
          />
        </div>
      </section>
    </Layout>
  )
}
