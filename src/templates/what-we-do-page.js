import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby'
import loadable from "@loadable/component"

// core components
import Layout from "components/Layouts/Layout.js"
import Seo from "components/Layouts/Seo.js"

// Sections for this page
const IntroSection = loadable(() => import(/* webpackChunkName: 'IntroSection' */ "../sections/WhatWeDo/IntroSection"));
const MainTextSection = loadable(() =>import(/* webpackChunkName: 'MainTextSection' */ "../sections/WhatWeDo/MainTextSection.jsx"))
const CarouselSection = loadable(() => import(/* webpackChunkName: 'CarouselSection' */ "../sections/WhatWeDo/CarouselSection.jsx"));
const ContentSection = loadable(() =>import(/* webpackChunkName: 'ContentSection' */ "../sections/WhatWeDo/ContentSection.jsx"))

// necessary for smooth-scroll package
if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

const WhatWeDoPage = props => {
  const { frontmatter: data } = props.data.markdownRemark
  const { langKey } = props.pageContext
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
        <MainTextSection data={data.main_text_section} />
        <CarouselSection data={data.carousel_section} />
        <ContentSection data={data.content_section} langKey={langKey} />
      </div>
    </Layout>
  )
}
WhatWeDoPage.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired
};

export default (WhatWeDoPage)
export const query = graphql`
  query WhatWeDoPage($langKey:String) {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
    markdownRemark(frontmatter: { templateKey: { eq: "what-we-do-page" } }, fields:{ langKey: { eq: $langKey } }) {
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
        main_text_section {
          image_boxes {
            image
            image_height
            image_mobile_height
            image_link
            heading
            subheading
            button_label
            button_link
          }
        }
        carousel_section {
          heading
          carousel_images {
            image
            image_alt
            caption
          }
          carousel_next_label
        }
        content_section {
          left_side {
            heading
            subheading
            button_label
            button_link
          }
          right_side {
            image
            image_alt
          }
        }
      }
    }
  }
`