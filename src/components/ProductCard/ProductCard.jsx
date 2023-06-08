import React from "react"
// @material-ui/core components
import { withStyles } from "tss-react/mui"
import GridItem from "components/Grid/GridItem.jsx"

import productCardStyle from "assets/jss/material-kit-react/components/productCardStyle.jsx"

function ProductCard({ title, image, description, ...props }) {
  const { classes } = props
  return (
    <GridItem xs={6} sm={6} md={4} className={classes.cardWrapper}>
      <div
        className={`${classes.productImage} ${classes.linkAvatar}`}
        style={{ backgroundImage: `url("${image}")` }}></div>
      <h4 className={classes.title}>{title}</h4>
      <p className={classes.role}>{description}</p>
    </GridItem>
  )
}

export default withStyles(ProductCard, productCardStyle)
