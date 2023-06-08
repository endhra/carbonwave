import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import loadable from "@loadable/component";

// core components
import Layout from "components/Layouts/Layout.js"
import Seo from "components/Layouts/Seo.js"

// Sections for this page
const IntroSection = loadable(() => import(/* webpackChunkName: 'IntroSection' */ "../sections/Contact/IntroSection"));
const LocationsSection = loadable(() => import(/* webpackChunkName: 'LocationsSection' */ "../sections/Contact/LocationsSection"));

// necessary for smooth-scroll package
if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

const ContactPage = props => {
  const { frontmatter: data } = props.data.markdownRemark
  const { edges: formData } = props.data.allHubspotForm
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
        <IntroSection data={data.intro_section} formData={formData}/>
        <LocationsSection data={data.locations_section}/>
      </main>
    </Layout>
  )
}

ContactPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default (ContactPage)
export const query = graphql`
  query ContactPage($langKey:String) {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
    markdownRemark(frontmatter: { templateKey: { eq: "contact-page" } }, fields: { langKey:{ eq: $langKey } }) {
      frontmatter {
        seo {
          title
          description
          image
        }
        intro_section {
          heading
          subheading
          background_image
          mobile_background_image
          form_id
          consent_desc
          consent_msg
          consent_desc_2
          consent_desc_3
          send_btn_label
          message_sent_error
          message_sent_confirmation
        }
        locations_section {
          heading
          locations {
            heading
            subheading
            address_label
            address_content
            address_button_label
            address_link
            email_label
            email_content
            carousel_images {
              image
            }
            carousel_next_label
          }
        }
      }
    }
    allHubspotForm {
      edges {
        node {
          guid
          name
          formFieldGroups {
            fields {
              defaultValue
              label
              name
              required
              type
              fieldType
              options {
                label
                value
              }
            }
          }
          thankYouMessageJson
          submitText
        }
      }
    }
  }
`