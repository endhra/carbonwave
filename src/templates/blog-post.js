import React from "react"
import { graphql } from "gatsby"
import loadable from "@loadable/component"

// core components
import Layout from "components/Layouts/Layout"
import Seo from "components/Layouts/Seo.js"

// Sections for this page
const BlogPostTemplate = loadable(() => import(/* webpackChunkName: 'BlogRoll' */ "../sections/Blog/BlogPostTemplate"));

const BlogPost = props => {
  const post = props.data.blogpost
  const recentPosts = props.data.recentposts.edges
  const recentPostsData = props.data.blogpage.edges[0].node.frontmatter
  const { langKey } = props.pageContext;
  return (
    <Layout>
      <Seo 
        lang={langKey}
        title={post.frontmatter.title || props.data.site.siteMetadata.title}
        description={post.frontmatter.description || post.excerpt}
        image={post.frontmatter.image || null}
        pathname={props.location.pathname}
      />
      <main style={{minHeight: "100vh"}}>
        <BlogPostTemplate
          frontmatter={post.frontmatter}
          content={post.html}
          pageContext={props.pageContext}
          recentPosts={recentPosts}
          recentPostsData={recentPostsData}
        />
      </main>
    </Layout>
  )
}

export default (BlogPost)

export const pageQuery = graphql`
  query BlogPost($id: String, $langKey: String, $skip: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    blogpost: markdownRemark(id: { eq: $id }, fields:{ langKey: { eq: $langKey } }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        image
      }
    }
    recentposts: allMarkdownRemark(
      sort: {order: DESC, fields: [frontmatter___date]}, 
      filter: {frontmatter: {templateKey: {eq: "blog-post"}}, fields: {langKey: {eq: $langKey}}},
      limit: 4,
      skip: $skip
    ) {
      edges {
        node {
          excerpt(pruneLength: 100)
          id
          fields {
            slug
            langKey
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
            description
            image
          }
        }
      }
    }
    blogpage: allMarkdownRemark(filter: {fields: {langKey: {eq: $langKey}}, frontmatter: {templateKey: {eq: "blog-page"}}}) {
      edges {
        node {
          id
          fields {
            langKey
          }
          frontmatter {
            heading
            widget_heading
            previous_post_label
            next_post_label
          }
        }
      }
    }
  }
`
