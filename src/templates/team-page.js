import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby'
import loadable from "@loadable/component"

// core components
import Layout from "components/Layouts/Layout.js"
import Seo from "components/Layouts/Seo.js"


// Sections for this page
const TeamSection = loadable(() =>import(/* webpackChunkName: 'TeamSection' */ "../sections/Team/TeamSection"))

// necessary for smoot-scroll package
if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

const TeamPage = props => {
  const { frontmatter: data } = props.data.markdownRemark
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
      <main style={{minHeight: "100vh", overflow: "hidden"}}>
        <TeamSection data={data.team_section} />
      </main>
    </Layout>
  )
}
TeamPage.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired
};
export default (TeamPage)
export const query = graphql`
  query TeamPage($langKey: String) {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
    markdownRemark(frontmatter: { templateKey: { eq: "team-page" } }, fields: { langKey: { eq: $langKey } }) {
      frontmatter {
        seo {
          title
          description
          image
        }
        team_section {
          heading
          team_members {
            role
            name
            photo
            popup_photo
            bio {
              row
            }
          }
        }
      }
    }
  }
`