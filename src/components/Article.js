import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import tw, { styled } from "twin.macro"
import Layout from "./Layout"
import { graphql } from "gatsby"
export default ({ data: { mdx } }) => {
  const image = getImage(mdx.frontmatter.featuredImage)
  console.log(mdx)
  return (
    <Layout>
      <h1 tw="mt-20 text-2xl font-bold text-center mb-8">
        {mdx.frontmatter.title}
      </h1>
      <GatsbyImage
        tw="w-11/12 md:w-8/12 lg:w-5/12 mx-auto"
        image={image}
        alt=""
      />
      <ArticleContainer>
        <MDXProvider>
          <MDXRenderer frontmatter={mdx.frontmatter}>{mdx.body}</MDXRenderer>
        </MDXProvider>
      </ArticleContainer>
    </Layout>
  )
}

const ArticleContainer = styled("div")`
  ${tw`mx-4 md:mx-auto md:w-8/12 max-w-2xl md:text-md`}

  h2 {
    ${tw`text-lg font-bold mt-8 mb-1`}
  }

  h3 {
    ${tw`text-md font-bold mt-4`}
  }

  p {
    ${tw`my-4 md:my-6 md:leading-relaxed`}
  }

  a {
    ${tw`text-primary-500 underline`}
  }

  .video {
    ${tw`w-full text-center`}
  }
`

export const query = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
        featuredImage {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`
