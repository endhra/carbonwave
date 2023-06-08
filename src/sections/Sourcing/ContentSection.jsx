import React from "react"
// @material-ui/core components
import { withStyles } from "tss-react/mui"

// core components
import AnimateIn from "components/AnimateIn/AnimateIn.jsx"
import GridContainer from "components/Grid/GridContainer.jsx"
import GridItem from "components/Grid/GridItem.jsx"
import HoverImageGrid from "components/HoverImageGrid/HoverImageGrid.jsx";

import generalViewStyle from "assets/jss/material-kit-react/views/generalViewStyle.jsx";

class ContentSection extends React.Component {
  render() {
    const { classes } = this.props
    let data
    if (this.props.data) {
      data = this.props.data
    } else return null
    return (
      <div className={`${classes.container} ${classes.overflowVisible} ${classes.marginTop130}`}>
        <GridContainer justifyContent="space-between">
          <GridItem xs={12} sm={12} md={4}>
            <div>
              <AnimateIn type="slide">
                <h2>{data.heading}</h2>
                <p>{data.subheading}</p>
              </AnimateIn>
            </div>
          </GridItem>
          <GridItem xs={12} sm={12} md={7}>
           <div>
            <AnimateIn type="slide">
              <HoverImageGrid data={data} />
            </AnimateIn>
           </div>
         </GridItem>
        </GridContainer>
      </div>
    )
  }
}

export default withStyles(ContentSection, generalViewStyle)