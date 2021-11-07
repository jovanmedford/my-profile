import React from "react"
import tw, { styled } from "twin.macro"
import Layout from "./Layout"
import { graphql } from "gatsby"
export default ({ data, children }) => {
  return (
    <Layout>
      <ArticleContainer>{children}</ArticleContainer>
    </Layout>
  )
}

const ArticleContainer = styled("div")`
  ${tw`mx-4 md:mx-auto md:w-8/12 max-w-2xl md:text-md`}
  h1 {
    ${tw`text-2xl font-bold text-center mb-8`}
  }

  h2 {
    ${tw`text-lg font-bold mt-8 mb-1`}
  }

  h3 {
    ${tw`text-md font-bold mt-4`}
  }

  p {
    ${tw`my-4 md:my-8 md:leading-relaxed`}
  }

  a {
    ${tw`text-primary-500 underline`}
  }
`

export const query = graphql`
  query {
    allMdx {
      edges {
        node {
          frontmatter {
            title
          }
        }
      }
    }
  }
`
