import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
 import { withStyles } from "tss-react/mui";

// core components
import parallaxStyle from "assets/jss/material-kit-react/components/parallaxStyle.jsx";

class Parallax extends React.Component {
  constructor(props) {
    super(props);
    var windowScrollTop = typeof window !== 'undefined' && window.pageYOffset / 3;
    this.state = {
      transform: "translate3d(0," + windowScrollTop + "px,0) rotate(0.01deg)"
    };
    this.resetTransform = this.resetTransform.bind(this);
  }
  componentDidMount() {
    var windowScrollTop = window.pageYOffset / 3;
    this.setState({
      transform: "translate3d(0," + windowScrollTop + "px,0) rotate(0.01deg)"
    });
    window.addEventListener("scroll", this.resetTransform);
  }
  componentWillUnmount() {
    typeof window !== 'undefined' && window.removeEventListener("scroll", this.resetTransform);
  }
  resetTransform() {
    var windowScrollTop = typeof window !== 'undefined' && window.pageYOffset / 3;
    this.setState({
      transform: "translate3d(0," + windowScrollTop + "px,0) rotate(0.01deg)"
    });
  }
  render() {
    const {
      classes,
      filter,
      className,
      children,
      style,
      video,
      videoPoster,
      small
    } = this.props;
    const parallaxClasses = classNames({
      [classes.parallax]: true,
      [classes.filter]: filter,
      [classes.small]: small,
      [className]: className !== undefined
    });
    return (
      video ?
      <div style={{
        backgroundColor: "black"
      }}>
        <video
          src={video} 
          type="video/mp4"
          preload="auto"
          className={parallaxClasses}
          style={{
            ...style,
            ...this.state,
            backgroundColor: "black",
            opacity: 0.6,
            minHeight: "720px"
          }}
          ref="parallax"
          autoPlay
          muted playsInline
          aria-label="Kelp video background"
          crossOrigin="anonymous"
          poster={videoPoster}
          loop
        />
        <div className={classes.container}>
          <div className={classes.overlay}>
            {children}
          </div>
        </div>
      </div>
      :
      <div
        className={parallaxClasses}
        style={{
          ...style,
          backgroundImage: `url("${videoPoster}")`,
          ...this.state
        }}
        ref="parallax"
      >
        {children}
      </div>
    );
  }
}

Parallax.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  filter: PropTypes.bool,
  children: PropTypes.node,
  style: PropTypes.string,
};

export default withStyles(Parallax, parallaxStyle);
