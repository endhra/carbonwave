import React from "react"

import "@fontsource/open-sans/300.css"
import "@fontsource/open-sans/300-italic.css"
import "@fontsource/open-sans/400.css"
import "assets/scss/material-kit-react.scss?v=1.4.0"
import Footer from "./../Footer/Footer.jsx"

import Header from "./../Header/Header.jsx"
import HeaderLinks from "./../Header/HeaderLinks.jsx"
import { useStaticQuery, graphql } from "gatsby"

const dashboardRoutes = []

const TemplateWrapper = ({ children }) => {
  const data = useStaticQuery(graphql`
    query MenuQuery {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/layout/" } }) {
        edges {
          node {
            frontmatter {
              menu {
                home {
                  show_in_menu
                  en_label
                  es_label
                }
                what_we_do {
                  show_in_menu
                  en_label
                  es_label
                }
                sourcing {
                  show_in_menu
                  en_label
                  es_label
                }
                team {
                  show_in_menu
                  en_label
                  es_label
                }
                blog {
                  show_in_menu
                  en_label
                  es_label
                }
                contact {
                  show_in_menu
                  en_label
                  es_label
                }
                logo
                mobile_background_image
              }
              footer {
                footer_text
                en_subscribe_label
                es_subscribe_label
                en_subscribe_desc
                es_subscribe_desc
                en_join
                es_join
                linkedin_url
                twitter_url
                instagram_url
              }
            }
          }
        }
      }
    }
  `)
  let menuData = data.allMarkdownRemark.edges[0].node.frontmatter.menu
  let footerData = data.allMarkdownRemark.edges[0].node.frontmatter.footer
  return (
    <React.Fragment>
      <Header
        routes={dashboardRoutes}
        brandLogo={menuData.logo}
        mobileMenuImage={menuData.mobile_background_image}
        rightLinks={<HeaderLinks menuData={menuData} langs={["en", "es"]} />}
        fixed
        changeColorOnScroll={{
          height: 100,
          color: "white",
        }}
      />
      <React.Fragment>{children}</React.Fragment>
      <Footer menuData={menuData} footerData={footerData} />
    </React.Fragment>
  )
}
export default TemplateWrapper
