import React from 'react';
import PropTypes from 'prop-types';
import { graphql, navigate } from 'gatsby'

// core components
// import Layout from "components/Layouts/Layout.js"

// necessary for smooth-scroll package
if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

const SeabalancePage = props => {
  const isBrowser = typeof window !== 'undefined';
  const { frontmatter: data } = props.data.markdownRemark
  // const { langKey } = props.pageContext

  if (isBrowser && data.seabalance_page_link) {
    navigate(data.seabalance_page_link, {replace: true})
  }
  return (
      <div></div>
  )
}
SeabalancePage.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired
};

export default (SeabalancePage)
export const query = graphql`
  query SeabalancePage($langKey:String) {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
    markdownRemark(frontmatter: { templateKey: { eq: "seabalance-page" } }, fields: { langKey: { eq: $langKey } }) {
      frontmatter {
        seabalance_page_link
      }
    }
  }
`