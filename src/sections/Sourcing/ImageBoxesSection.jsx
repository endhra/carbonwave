import React from "react"
// @material-ui/core components
import { withStyles } from "tss-react/mui"

// core components
import Box from "@mui/material/Box"
import AnimateIn from "components/AnimateIn/AnimateIn.jsx"
import GridContainer from "components/Grid/GridContainer.jsx"
import GridItem from "components/Grid/GridItem.jsx"

import generalViewStyle from "assets/jss/material-kit-react/views/generalViewStyle.jsx"

function QuotesCarouselSection({
  data: { heading, subheading, image_boxes },
  classes,
}) {
  return (
    <div
      className={`${classes.container} ${classes.marginTop140} ${classes.marginBottom100}`}
    >
      <AnimateIn type="slide">
      <GridContainer justifyContent="center">
        <GridItem md={10} >
          <h2>{heading}</h2>
          <Box className={classes.subtitle}>{subheading}</Box>
        </GridItem>
        </GridContainer>
      </AnimateIn>
      <GridContainer justifyContent="space-between">
        {image_boxes.map((image_box, i) => (
          <GridItem xs={12} sm={12} md={4} key={i}>
            <AnimateIn type="slide">
              <div
                className={`${classes.marginTop30} ${classes.paddingRight80}`}
              >
                <div className={classes.boxImageWrapper}>
                  <img
                    className={classes.boxImage}
                    alt={image_box.image_alt}
                    src={image_box.image}
                  />
                </div>
                <h4>{image_box.heading}</h4>
                <p>{image_box.subheading}</p>
              </div>
            </AnimateIn>
          </GridItem>
        ))}
      </GridContainer>
    </div>
  )
}

export default withStyles(QuotesCarouselSection, generalViewStyle)
