import React from "react";
import Cookies from 'js-cookie';
import PropTypes from 'prop-types';
import { graphql, navigate } from 'gatsby'
import loadable from "@loadable/component";

// core components
import Layout from "components/Layouts/Layout.js"
import Seo from "components/Layouts/Seo.js"
import Popup from "components/Popup/Popup.jsx"


// Sections for this page
const IntroSection = loadable(() => import(/* webpackChunkName: 'IntroSection' */ "../sections/Landing/IntroSection"));
const ContentVideoSection = loadable(() => import(/* webpackChunkName: 'ContentSection' */ "../sections/Landing/ContentVideoSection"));
const CounterSection = loadable(() => import(/* webpackChunkName: 'CounterSection' */ "../sections/Landing/CounterSection"));
const TwitterAndRecentPostsSection = loadable(() => import(/* webpackChunkName: 'TwitterAndRecentPostsSection' */ "../sections/Landing/TwitterAndRecentPostsSection"));
const InTheNewsSection = loadable(()=> import(/* webpackChunkName: '2040Section' */ "../sections/Landing/CallToActionSection.jsx"));
const ContentSection = loadable(() => import(/* webpackChunkName: 'ContentSection' */ "../sections/Landing/ContentSection"));
const CarouselSection = loadable(() => import(/* webpackChunkName: 'CarouselSection' */ "../sections/Landing/CarouselSection.jsx"));
const CallToActionSection = loadable(()=> import(/* webpackChunkName: '2040Section' */ "../sections/Landing/CallToActionSection.jsx"));

// necessary for smooth-scroll package
if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

const getRedirectLanguage = () => {
  if (typeof navigator === `undefined`) {
    return "en";
  }

  const lang = navigator && navigator.language && navigator.language.split("-")[0];
  if (!lang) return "en";

  switch (lang) {
    case "es":
      return "es";
    default:
      return "en";
  }
};

const LandingPage = props => {
  const isBrowser = typeof window !== 'undefined';
  const data = props.data.landing.frontmatter
  const recentPosts = props.data.recentposts.edges
  const { langKey } = props.pageContext;

  const browserLang = getRedirectLanguage()
  if (isBrowser && langKey !== browserLang && !Cookies.get('language-selected')) {
    if (browserLang !== 'en') navigate(`/${browserLang}/`, {replace: true})
    navigate(`/`, {replace: true})
  }
  
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
        <IntroSection data={data.intro_section} langKey={langKey} />
        <ContentVideoSection data={data.content_video_section} />
        <CounterSection data={data.counter_section} />
        <TwitterAndRecentPostsSection data={data.twitter_and_recent_posts_section} recentPosts={recentPosts} langKey={langKey} />
        {data.in_the_news_section && data.in_the_news_section.heading && <InTheNewsSection data={data.in_the_news_section} langKey={langKey} />}
        <ContentSection data={data.content_section} />
        <CarouselSection data={data.carousel_section} />
        <CallToActionSection data={data.call_to_action_section} langKey={langKey} />
        {(data.popup.show_popup && (data.popup.title || data.popup.text)) &&
          <Popup data={data.popup} />
        }
        </div>
    </Layout>
  );
}
LandingPage.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired
}
export default (LandingPage);
export const query = graphql`
  query LandingPage($langKey: String) {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
    landing: markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }, fields: { langKey: { eq: $langKey } }) {
      frontmatter {
        seo {
          title
          description
          image
        }
        intro_section {
          background_image
          heading
          subheading
          action_btn_text
          action_btn_link
        }
        content_video_section {
          heading
          subheading
          video_src
          video_poster
          video_alt
        }
        counter_section {
          heading
          subheading
          counter_date
          counter_text
          image_boxes {
            image
            image_alt
            heading
            subheading
          }
        }
        twitter_and_recent_posts_section {
          left_side {
            background_image
            twitter_avatar
          }
          right_side {
            background_color
            heading
            button_label
            button_link
          }
        }
        in_the_news_section {
          background_image
          background_color
          heading
          subheading
          logo_images {
            image
            image_alt
            image_link
          }
          button_label
          button_link
        }
        content_section {
          heading
          subheading
          calculator_labels {
            slider_label
            first_element_title
            first_element_content
            second_element_title
            second_element_content
            third_element_title
            third_element_content
            fourth_element_title
            fourth_element_content
          }
          calculator_meta_text
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
        call_to_action_section {
          background_image
          background_color
          heading
          subheading
          logo_images {
            image
            image_alt
            image_link
          }
          button_label
          button_link
        }
        popup {
          show_popup
          title
          text
          button_label
          button_link
        }
      }
    }
    recentposts: allMarkdownRemark(
      sort: {order: DESC, fields: [frontmatter___date]}, 
      filter: {frontmatter: {templateKey: {eq: "blog-post"}}, fields: {langKey: {eq: $langKey}}},
      limit: 3,
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
  }
`