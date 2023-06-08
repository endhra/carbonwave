import React from 'react'
import { graphql } from 'gatsby'
import AnimateIn from "components/AnimateIn/AnimateIn.jsx"
import GridContainer from "components/Grid/GridContainer.jsx"
import GridItem from "components/Grid/GridItem.jsx"
import loadable from "@loadable/component"
import Layout from 'components/Layouts/Layout.js'
import Seo from "components/Layouts/Seo.js"

import { withStyles } from "tss-react/mui"
import generalViewStyle from "assets/jss/material-kit-react/views/generalViewStyle.jsx";

// Sections for this page
const BlogRoll = loadable(() => import(/* webpackChunkName: 'BlogRoll' */ "../sections/Blog/BlogRoll"));

const BlogPage = props => {
  const { pageContext, classes } = props
  const recentPosts = props.data.blogposts.edges
  const data = props.data.blogpage.edges[0].node.frontmatter
  const { langKey } = props.pageContext;

  return (
    <Layout>
      <Seo 
        lang={langKey}
        title={data.seo.title || props.data.site.siteMetadata.title}
        description={data.seo.description || props.data.site.siteMetadata.description}
        image={data.seo.image || null}
        pathname={props.location.pathname}
      />
      <main style={{minHeight: "100vh"}}>
        <div
          className={`${classes.container} ${classes.marginTop200} ${classes.marginBottom40}`}
        >
          <GridContainer justifyContent="space-between">
            <GridItem xs={12} sm={12} md={12} className={classes.marginBottom80}>
              <AnimateIn type="slide">
                <h1 className={classes.title}>{data.heading}</h1>
              </AnimateIn>
            </GridItem>
            <BlogRoll
              recentPosts={recentPosts}
              pageContext={pageContext}
              columns={3}
              showImage={true}
              showPagination={true}
            />
          </GridContainer>
        </div>
      </main>
    </Layout>
  )
}

export default withStyles(BlogPage, generalViewStyle)
export const query = graphql`
  query BlogRollQuery ($langKey: String, $skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
    blogposts: allMarkdownRemark(
      sort: {order: DESC, fields: [frontmatter___date]}, 
      filter: {frontmatter: {templateKey: {eq: "blog-post"}}, fields: {langKey: {eq: $langKey}}},
      limit: $limit,
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
            seo {
              title
              description
              image
            }
            heading
          }
        }
      }
    }
  }
`
