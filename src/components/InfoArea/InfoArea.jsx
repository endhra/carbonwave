import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
 import { withStyles } from "tss-react/mui";

import infoStyle from "assets/jss/material-kit-react/components/infoStyle.jsx";

function InfoArea({ ...props }) {
  const { classes, title, description, iconColor, vertical, icon, image, imageSize } = props;
  const iconWrapper = classNames({
    [classes.iconWrapper]: true,
    [classes[iconColor]]: true,
    [classes.iconWrapperVertical]: vertical
  });
  const iconClasses = classNames({
    [classes.icon]: true,
    [classes.iconVertical]: vertical
  });
  return (
    <div className={classes.infoArea}>
      <div className={iconWrapper}>
        { props.image && <img style={{height: imageSize || "18em"}} src={image} alt={title} />}
        { props.icon && <icon className={iconClasses} />}
      </div>
      <div className={classes.descriptionWrapper}>
        <p class="h4" style={{fontSize: '1.125rem', lineHeight: '1.5em'}}  className={classes.title}>{title}</p>
        <p className={classes.description}>{description}</p>
      </div>
    </div>
  );
}

InfoArea.defaultProps = {
  iconColor: "gray"
};

InfoArea.propTypes = {
  classes: PropTypes.object.isRequired,
  icon: PropTypes.func,
  image: PropTypes.string,
  imageSize: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  iconColor: PropTypes.oneOf([
    "primary",
    "warning",
    "danger",
    "success",
    "info",
    "rose",
    "gray"
  ]),
  vertical: PropTypes.bool
};

export default withStyles(InfoArea, infoStyle);
