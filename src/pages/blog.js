import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import styled from 'styled-components'

const ArticleContainer = styled.div`
  text-align: center;
`
const BlogLink = styled(Link)`
  text-decoration: none;
`

const BlogTitle = styled.h3`
  margin-bottom: 0.4rem;
  color: blue;
`

const AuthorAndDate = styled.p`
  margin: 0 0 0.625rem 0;
  font-style: italic;
  color: darkgray;
`

const ExcerptText = styled.p`
  margin: 0 0 1rem 0;
`

const Blog = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <SEO title="Blog" />
      <ArticleContainer>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={ node.id }>
          <BlogLink to={ node.fields.slug }>
            <BlogTitle>{ node.frontmatter.title }</BlogTitle>
            <AuthorAndDate>
              By { node.frontmatter.author } on { node.frontmatter.date }
            </AuthorAndDate>
          </BlogLink>
            <ExcerptText>{ node.excerpt }</ExcerptText>
          </div>
        ))}
        <h4>Blog posts: { data.allMarkdownRemark.totalCount }</h4>
      </ArticleContainer>
    </Layout>
  )
}

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
            author_page
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

export default Blog