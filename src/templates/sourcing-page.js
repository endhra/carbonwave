import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby'
import loadable from "@loadable/component"

// core components
import Layout from "components/Layouts/Layout.js"
import Seo from "components/Layouts/Seo.js"

// Sections for this page
const IntroSection = loadable(() => import(/* webpackChunkName: 'IntroSection' */ "../sections/Sourcing/IntroSection"));
const CarouselSection = loadable(() => import(/* webpackChunkName: 'CarouselSection' */ "../sections/Sourcing/CarouselSection.jsx"));
const ContentSection = loadable(() => import(/* webpackChunkName: 'ContentSection' */ "../sections/Sourcing/ContentSection"));
const QuotesCarouselSection = loadable(() => import(/* webpackChunkName: 'QuotesCarouselSection' */ "../sections/Sourcing/QuotesCarouselSection"));
const ImageBoxesSection = loadable(() => import(/* webpackChunkName: 'ImageBoxesSection' */ "../sections/Sourcing/ImageBoxesSection"));
const BreakSection = loadable(() => import(/* webpackChunkName: 'BreakSection' */ "../sections/Sourcing/BreakSection"));
const LocationSection = loadable(() => import(/* webpackChunkName: 'BreakSection' */ "../sections/Sourcing/LocationSection"));

// necessary for smooth-scroll package
if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

const SourcingPage = props => {
  const { frontmatter: data } = props.data.markdownRemark
  const { langKey } = props.pageContext
  console.log(data.location_section);
  return (
    <Layout>
      <Seo 
        lang={langKey}
        title={data.seo.title || props.data.site.siteMetadata.title}
        description={data.seo.description || props.data.site.siteMetadata.description}
        image={data.seo.image || null}
        pathname={props.location.pathname}
      />
      <div style={{minHeight: "100vh", overflow: "hidden"}}>
        <IntroSection data={data.intro_section} />
        <CarouselSection data={data.carousel_section} />
        <ContentSection data={data.content_section} />
        <QuotesCarouselSection data={data.quotes_carousel_section} />
        <ImageBoxesSection data={data.image_boxes_section} />
        <BreakSection data={data.break_section} />
        <LocationSection data={data.location_section} />
      </div>
    </Layout>
  )
}
SourcingPage.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired
};

export default (SourcingPage)
export const query = graphql`
  query SourcingPage($langKey:String) {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
    markdownRemark(frontmatter: { templateKey: { eq: "sourcing-page" } }, fields:{ langKey: { eq: $langKey } }) {
      frontmatter {
        seo {
          title
          description
          image
        }
        intro_section {
          background_image
          mobile_background_image
          heading
          subheading
        }
        carousel_section {
          carousel_images {
            image
            image_alt
          }
          carousel_next_label
          heading
          subheading
        }
        content_section {
          heading
          subheading
          hover_grid {
            action_label
            first_element_text
            first_element_image
            second_element_text
            second_element_image
            third_element_text
            third_element_image
            fourth_element_text
            fourth_element_image
          }
        }
        quotes_carousel_section {
          heading
          quotes {
            quote
            source_name
            source_place
          }
        }
        image_boxes_section {
          heading
          subheading
          image_boxes {
            image
            image_alt
            heading
            subheading
          }
        }
        break_section {
          background_image
          background_color
          heading
          subheading
        }
        location_section {
          heading
          content
          carousel_next_label
          carousel_images {
            image
          }
        }
      }
    }
  }
`