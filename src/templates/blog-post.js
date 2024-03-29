import React from 'react'
import { graphql } from "gatsby"
import Layout from '../components/layout'
import Container from './blog-post.styles'

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <Container>
        <h2>{post.frontmatter.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <p><em>Written by <a href={post.frontmatter.author_page} rel="noopener noreferrer" target="_blank">{post.frontmatter.author}</a> on {post.frontmatter.date}
        </em></p>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug }}) {
      html
      frontmatter {
        title
        date
        author
        author_page
      }
    }
  }
`