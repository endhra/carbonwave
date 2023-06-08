import React from "react"
// @material-ui/core components
import GridContainer from "components/Grid/GridContainer.jsx"
import GridItem from "components/Grid/GridItem.jsx"

import { withStyles } from "tss-react/mui"

import hoverImageGridStyle from "assets/jss/material-kit-react/components/hoverImageGridStyle.jsx"

function HoverImageGrid({ data: { hover_grid }, classes }) {
  return (
    <GridContainer>
      <GridItem xs={6} sm={6} md={6} className={classes.customMobilePadding}>
        <div
          className={classes.element}
          style={{ backgroundImage: `url("${hover_grid.first_element_image}")` }}
        >
          <span className={classes.actionLabel}>{hover_grid.action_label}</span>
          <div className={classes.overlay}>
            <div>{hover_grid.first_element_text}</div>
          </div>
        </div>
      </GridItem>
      <GridItem xs={6} sm={6} md={6} className={classes.customMobilePadding}>
        <div
          className={classes.element}
          style={{ backgroundImage: `url("${hover_grid.second_element_image}")` }}
        >
          <div className={classes.overlay}>
            <div>{hover_grid.second_element_text}</div>
          </div>
        </div>
      </GridItem>
      <GridItem xs={6} sm={6} md={6} className={classes.customMobilePadding}>
        <div
          className={classes.element}
          style={{ backgroundImage: `url("${hover_grid.third_element_image}")` }}
        >
          <div className={classes.overlay}>
            <div>{hover_grid.third_element_text}</div>
          </div>
        </div>
      </GridItem>
      <GridItem xs={6} sm={6} md={6} className={classes.customMobilePadding}>
        <div
          className={classes.element}
          style={{ backgroundImage: `url("${hover_grid.fourth_element_image}")` }}
        >
          <div className={classes.overlay}>
            <div>{hover_grid.fourth_element_text}</div>
          </div>
        </div>
      </GridItem>
    </GridContainer>
  )
}

export default withStyles(HoverImageGrid, hoverImageGridStyle)
