import React from "react"
// @material-ui/core components
import { withStyles } from "tss-react/mui"
// core components
import AnimateIn from "components/AnimateIn/AnimateIn.jsx"
import GridContainer from "components/Grid/GridContainer.jsx"
import GridItem from "components/Grid/GridItem.jsx"

import SingleImageCarousel from "components/SingleImageCarousel/SingleImageCarousel.jsx"

import generalViewStyle from "assets/jss/material-kit-react/views/generalViewStyle.jsx"

function LocationsSection({
  data: { heading, content, carousel_images, carousel_next_label },
  classes,
}) {
  return (
    <div
      className={`${classes.container} ${classes.overflowVisible} ${classes.marginTop70} ${classes.marginBottom100}`}
    >
      <GridContainer>
        <GridItem
          xs={12}
          sm={12}
          md={5}
          lg={4}
          className={classes.marginBottom50}
        >
          <AnimateIn type="slide">
            <h3 className={`${classes.smallTitle} ${classes.marginTop30}`}>
              {heading}
            </h3>
            <p>{content}</p>
          </AnimateIn>
        </GridItem>
        <GridItem xs={12} sm={12} md={7} lg={8}>
          <SingleImageCarousel
            elementId={`location-image-carousel`}
            data={{
              carousel_images: carousel_images,
              carousel_next_label: carousel_next_label,
            }}
            alignRight
          />
        </GridItem>
      </GridContainer>
    </div>
  )
}

export default withStyles(LocationsSection, generalViewStyle)
