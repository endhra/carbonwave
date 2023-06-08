import React from 'react';
// @material-ui/core components
 import { withStyles } from "tss-react/mui";

// core components
import AnimateIn from "components/AnimateIn/AnimateIn.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Paper from "@mui/material/Paper";

import introStyle from "assets/jss/material-kit-react/views/introStyle.jsx";

class IntroSection extends React.Component {

  render() {
    const { classes, data } = this.props
    return (
      <Paper className={classes.posR} elevation={0}>
        <div className={`${classes.bgImage} ${classes.visibleDesktop}`} style={{ backgroundImage: `url("${data.background_image}")` }}></div>
        <div className={`${classes.bgImage} ${classes.visibleMobile}`} style={{ backgroundImage: `url("${data.mobile_background_image}")` }}></div>
        <div className={classes.smallContainer}>
          <GridContainer justifyContent="flex-start">
            <GridItem xs={12} sm={12} md={8}>
              <AnimateIn type="slide">
                <h1 className={classes.smallTitle}>{data.heading}</h1>
              </AnimateIn>
            </GridItem>
            <GridItem xs={12} sm={12} md={10} lg={8}>
              <AnimateIn type="slide">
                <span className={classes.subtitle}>{data.subheading}</span>
              </AnimateIn>
            </GridItem>
          </GridContainer>
        </div>
      </Paper>
    );
  }
}

export default withStyles(IntroSection, introStyle);
