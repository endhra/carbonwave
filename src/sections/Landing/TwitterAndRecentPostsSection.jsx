import React from 'react';
import { Link } from "gatsby"
// @material-ui/core components
 import { withStyles } from "tss-react/mui";

// core components
import AnimateIn from "components/AnimateIn/AnimateIn.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
// icons
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import generalViewStyle from "assets/jss/material-kit-react/views/generalViewStyle.jsx";
import TwitterWidget from 'components/TwitterWidget/TwitterWidget.jsx';

class TwitterAndRecentPostsSection extends React.Component {
  
  render() {
    const { classes, langKey, data, recentPosts } = this.props;

    return (
      <div className={classes.containerFluid}>
        <div className={`${classes.containerHalfDesktop} ${classes.containerHalfLeft} ${classes.bgImage}`} style={{ backgroundImage: `url("${data.left_side.background_image}")` }}></div>
        <div className={`${classes.containerHalfDesktop} ${classes.containerHalfRight}`} style={{ backgroundColor: data.right_side.background_color }}></div>
        <div className={`${classes.containerMobileFull}`}>
          <GridContainer className={classes.customJustifySpaceBetween}>
            <GridItem xs={12} sm={12} md={5} className={`${classes.marginBottom130} ${classes.marginTop130} ${classes.noMobileMargin}`}>
              <div className={`${classes.containerMobileAbsolute} ${classes.bgImage}`} style={{ backgroundImage: `url("${data.left_side.background_image}")` }}></div>
              <AnimateIn type="slide">
                <TwitterWidget adminData={data}></TwitterWidget>
              </AnimateIn>
            </GridItem>
            <GridItem xs={12} sm={12} md={5} className={`${classes.marginBottom130} ${classes.marginTop130} ${classes.noMobileMargin}`}>
              <div className={`${classes.containerMobileAbsolute} ${classes.bgImage}`} style={{ backgroundColor: data.right_side.background_color }}></div>
              <div className={classes.containerMobile}>
                <AnimateIn type="slide">
                  <h2>{data.right_side.heading}</h2>
                  {recentPosts.map(({ node: post }, key) => (
                    <AnimateIn type="slide" key={key}>
                      <div className={classes.marginBottom30}>
                        <Link
                          to={post.fields.slug}>
                          <h5>{post.frontmatter.title}</h5>
                        </Link>
                        <span className={classes.secondaryText}>{post.frontmatter.date}</span>
                      </div>
                    </AnimateIn>
                  ))}
                  <Link to={langKey === 'en' ? data.right_side.button_link : '/es' + data.right_side.button_link}>
                    <Button size="lg" color="primary">
                      <span>{data.right_side.button_label}</span>
                      <FontAwesomeIcon icon={faChevronRight} fixedWidth />
                    </Button>
                  </Link>
                </AnimateIn>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(TwitterAndRecentPostsSection, generalViewStyle);
