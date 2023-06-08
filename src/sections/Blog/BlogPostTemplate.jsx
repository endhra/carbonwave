import React from "react"
import { Link } from "gatsby"
import AnimateIn from "components/AnimateIn/AnimateIn.jsx"
import GridContainer from "components/Grid/GridContainer.jsx"
import GridItem from "components/Grid/GridItem.jsx"
import Button from "components/CustomButtons/Button.jsx";
// icons
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { withStyles } from "tss-react/mui"
import generalViewStyle from "assets/jss/material-kit-react/views/generalViewStyle.jsx";

import loadable from "@loadable/component"
// Sections for this page
const BlogRoll = loadable(() => import(/* webpackChunkName: 'BlogRoll' */ "./BlogRoll"));

class BlogPostTemplate extends React.Component {
  render() {
    const { 
      classes,
      frontmatter,
      content,
      pageContext,
      recentPosts,
      recentPostsData,
    } = this.props
    return (
      <div className={`${classes.container} ${classes.marginTop200} ${classes.marginBottom40}`}>
        <GridContainer justifyContent="space-between" alignItems="flex-start">
          <GridItem xs={12} sm={12} md={12} className={classes.marginBottom40}>
            <AnimateIn type="slide">
              <h1 className={classes.title}>{recentPostsData.heading}</h1>
            </AnimateIn>
          </GridItem>
          <GridItem xs={12} sm={12} md={12} className={classes.marginBottom40}>
            <AnimateIn type="slide">
              <h1 className={classes.smallTitle}>{frontmatter.title}</h1>
              <span className={classes.secondaryText}>{frontmatter.date}</span>
            </AnimateIn>
          </GridItem>
          <GridItem xs={12} sm={12} md={12} className={classes.marginBottom50}>
            <img
              src={frontmatter.image}
              alt={`thumbnail for post ${frontmatter.title}`}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={8} lg={9}>
            <div className={classes.contentMargin} dangerouslySetInnerHTML={{ __html: content }} />
            <div className={`${classes.contentMargin} ${classes.marginTop70} ${classes.paddingTop70} ${classes.marginBottom70} ${classes.divider} ${classes.spaceBetween}`}>
              {pageContext.previous && <Link to={pageContext.previous.fields.slug}>
                <Button size="lg" color="primary">
                  <FontAwesomeIcon icon={faChevronLeft} fixedWidth />
                  <span>{recentPostsData.previous_post_label}</span>
                </Button>
              </Link>}
              {pageContext.next && <Link to={pageContext.next.fields.slug}>
                <Button size="lg" color="primary">
                  <span>{recentPostsData.next_post_label}</span>
                  <FontAwesomeIcon icon={faChevronRight} fixedWidth />
                </Button>
              </Link>}
            </div>
          </GridItem>
          <GridItem xs={12} sm={12} md={4} lg={3} className={`${classes.marginTop30} ${classes.hideOnMobile}`}>
            <GridItem xs={12} sm={12} md={12}>
              <AnimateIn type="slide">
                <h1 className={classes.smallTitle}>{recentPostsData.widget_heading}</h1>
              </AnimateIn>
            </GridItem>
            <BlogRoll
              recentPosts={recentPosts}
              data={recentPostsData}
              pageContext={pageContext}
              columns={1}
              showImage={false}
              showPagination={false}
            />
          </GridItem>
        </GridContainer>
      </div>
    )
  }
}

export default withStyles(BlogPostTemplate, generalViewStyle)
