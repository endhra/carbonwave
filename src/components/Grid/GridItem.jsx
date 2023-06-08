import React from "react";
// @material-ui/core components
 import { withStyles } from "tss-react/mui";
import Grid from "@mui/material/Grid";

const style = {
  grid: {
    position: "relative",
    width: "100%",
    minHeight: "1px",
    paddingRight: "15px",
    paddingLeft: "15px",
    flexBasis: "auto",
    "@media (max-width: 599px)": {
      marginBottom: "10px"
    },
    "@media (min-width: 600px) and (max-width: 959px)": {
      marginBottom: "20px"
    }
  }
};

function GridItem({ ...props }) {
  const { classes, children, className, ...rest } = props;
  return (
    <Grid item {...rest} className={classes.grid + " " + (className ? className : "")}>
      {children}
    </Grid>
  );
}

export default withStyles(GridItem, style);
