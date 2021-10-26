import * as React from "react"
import Seo from "../components/seo"
import Layout from "../components/Layout"
import { susuImage, caribbeanScholarImage } from "../utils/staticImages"
import Card from "../components/Card"
import tw, { styled } from "twin.macro"
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
      <section
        tw="mt-20 text-white bg-primary-700 
            pt-16 pl-10 pb-10 pr-5
            mx-4 md:mx-12
            lg:mx-auto max-w-4xl
            md:pr-8 rounded-lg"
      >
        <h2 tw="text-lg font-bold mb-5">About me</h2>
        <TextContainer>
          <p>I’m a Front-End Developer from sunny Barbados!</p>
          <p>
            For as long as I could remember I’ve always wanted to work with
            computers. Over the years I’ve dabbled with data and finance until
            finally settling on web dev - simply because it allows me to scratch
            my creative itch while still bringing me the joyous pains of coding.
          </p>
          <p>
            In my spare time I work on my passion project - an online school
            called Caribbean Scholar. This will help to provide West Indian
            Students a high quality option for their virtual self studies.
          </p>
        </TextContainer>
      </section>
    </Layout>
  )
}

const TextContainer = styled("div")`
  p {
    ${tw`mb-4 leading-relaxed`}
  }
`
