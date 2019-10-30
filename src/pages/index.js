import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

    /* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */

const BlogLink = styled(Link)`
  text-decoration: none;
`

const BlogTitle = styled.h3`
  margin-bottom: 0.75rem;
  color: blue;
`

const AuthorAndDate = styled.p`
  font-style: italic;
  color: darkgray;
`

const IndexPage = ({ data }) => {
  console.log(data)
  return(
    <Layout>
      <SEO title="Home" />
      <div>
        <h2>Gatsby test blog</h2>
        <h4>Blog posts: { data.allMarkdownRemark.totalCount }</h4>

        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={ node.id }>
          <BlogLink to={ node.fields.slug }>
            <BlogTitle>{ node.frontmatter.title }</BlogTitle>
            <AuthorAndDate>
              By { node.frontmatter.author } on { node.frontmatter.date }
            </AuthorAndDate>
          </BlogLink>
            <p>{ node.excerpt }</p>
          </div>
        ))}
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            description
            title
            date
            author
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
