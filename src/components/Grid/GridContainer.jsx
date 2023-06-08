import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
 import { withStyles } from "tss-react/mui";
import Grid from "@mui/material/Grid";

const style = {
  grid: {
    marginRight: "-15px",
    marginLeft: "-15px",
    width: "auto"
  },
  withMargin: {
    margin: "130px -15px",
    "@media (max-width: 959px)": {
      margin: "50px -15px"
    }
  }
};

function GridContainer({ ...props }) {
  const { classes, children, withMargin, className, ...rest } = props;
  const gridClasses = classNames({
    [classes.withMargin]: withMargin,
  });
  return (
    <Grid container {...rest} className={classes.grid + " " + gridClasses + " " + (className ? className : "")}>
      {children}
    </Grid>
  );
}

GridContainer.defaultProps = {
  className: ""
};

GridContainer.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node,
  className: PropTypes.string
};

export default withStyles(GridContainer, style);
