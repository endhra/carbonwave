import React from "react"
// @material-ui/core components
import { withStyles } from "tss-react/mui"

// core components
import AnimateIn from "components/AnimateIn/AnimateIn.jsx"
import GridContainer from "components/Grid/GridContainer.jsx"
import GridItem from "components/Grid/GridItem.jsx"

import generalViewStyle from "assets/jss/material-kit-react/views/generalViewStyle.jsx";

class ContentVideoSection extends React.Component {
  render() {
    const { classes } = this.props
    let data
    if (this.props.data) {
      data = this.props.data
    } else return null
    return (
      <div className={`${classes.container} ${classes.overflowVisible} ${classes.marginTop130}`}>
        <GridContainer alignItems="center">
          <GridItem xs={12} sm={12} md={5} lg={6} className={`${classes.paddingRight80} ${classes.marginBottom30} ${classes.mobileOrder2}`}>
            <AnimateIn type="slide">
              <video
                id="content-video"
                style={{width: "100%"}}
                autoPlay muted playsInline loop
                aria-label={data.video_alt}
                alt={data.video_atl}
                src={data.video_src}
                type="video/mp4"
                poster={data.video_poster}
                crossOrigin="anonymous"
              />
            </AnimateIn>
          </GridItem>
          <GridItem xs={12} sm={12} md={7} lg={6} className={classes.mobileOrder1}>
            <div>
              <AnimateIn type="slide">
                <h2>{data.heading}</h2>
                <p>{data.subheading}</p>
              </AnimateIn>
            </div>
          </GridItem>
        </GridContainer>
      </div>
    )
  }
}

export default withStyles(ContentVideoSection, generalViewStyle)