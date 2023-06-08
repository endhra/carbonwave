import React from 'react';
import { Link } from "gatsby"
// @material-ui/core components
 import { withStyles } from "tss-react/mui";

// core components
import AnimateIn from "components/AnimateIn/AnimateIn.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Paper from "@mui/material/Paper";
import Button from "components/CustomButtons/Button.jsx";
// icons
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import introStyle from "assets/jss/material-kit-react/views/introStyle.jsx";

class IntroSection extends React.Component {

  render() {
    const { classes, data, langKey } = this.props
    return (
      <Paper className={classes.posR} elevation={0}>
        <div className={classes.bgImage} style={{ backgroundImage: `url("${data.background_image}")` }}></div>
        <div className={classes.container}>
          <GridContainer justifyContent="flex-start">
            <GridItem xs={12} sm={12} md={12} lg={12}>
              <AnimateIn type="slide">
                <h1 className={classes.title}>{data.heading}</h1>
              </AnimateIn>
            </GridItem>
            <GridItem xs={12} sm={12} md={9}>
              <AnimateIn type="slide">
                <p className={classes.subtitle}>{data.subheading}</p>
                <div className={classes.buttonWrapper}>
                  <Link to={langKey === 'en' ? data.action_btn_link : '/es' + data.action_btn_link}>
                    <Button size="lg" color="primary">
                      <span>{data.action_btn_text}</span>
                      <FontAwesomeIcon icon={faChevronRight} fixedWidth />
                    </Button>
                  </Link>
                </div>
              </AnimateIn>
            </GridItem>
          </GridContainer>
        </div>
      </Paper>
    );
  }
}

export default withStyles(IntroSection, introStyle);
