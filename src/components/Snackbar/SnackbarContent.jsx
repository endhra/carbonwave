import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
 import { withStyles } from "tss-react/mui";
import Snack from "@mui/material/SnackbarContent";
import IconButton from "@mui/material/IconButton";
import Icon from "@mui/material/Icon";
// icons
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import snackbarContentStyle from "assets/jss/material-kit-react/components/snackbarContentStyle.jsx";

class SnackbarContent extends React.Component {
  constructor(props) {
    super(props);
    this.closeAlert = this.closeAlert.bind(this);
    const { classes, message, color, close, icon } = props;
    var action = [];
    if (close !== undefined) {
      action = [
        <IconButton
          className={classes.iconButton}
          key="close"
          aria-label="Close"
          color="inherit"
          onClick={this.closeAlert}
        >
          <FontAwesomeIcon icon={faTimes} fixedWidth transform="shrink-2" />
        </IconButton>
      ];
    }

    let snackIcon = null;
    switch (typeof icon) {
      case "function":
        snackIcon = <props.icon className={classes.icon} />;
        break;
      case "string":
        snackIcon = <Icon className={classes.icon}>{props.icon}</Icon>;
        break;
      default:
        snackIcon = null;
        break;
    }

    this.state = {
      alert: (
        <Snack
          message={
            <div>
              {snackIcon}
              {message}
              {close !== undefined ? action : null}
            </div>
          }
          classes={{
            root: classes.root + " " + classes[color],
            message: classes.message + " " + classes.container
          }}
        />
      )
    };
  }
  closeAlert() {
    this.setState({ alert: null });
  }
  render() {
    return this.state.alert;
  }
}

SnackbarContent.propTypes = {
  classes: PropTypes.object.isRequired,
  message: PropTypes.node.isRequired,
  color: PropTypes.oneOf(["info", "success", "warning", "danger", "primary"]),
  close: PropTypes.bool,
  icon: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

export default withStyles(SnackbarContent, snackbarContentStyle);
