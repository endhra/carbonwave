/* eslint react/prop-types: 0 */
import React from "react";
// @material-ui/core components
 import { withStyles } from "tss-react/mui";
// core components
import AnimateIn from "components/AnimateIn/AnimateIn.jsx"
import ppmCounterStyle from "assets/jss/material-kit-react/components/ppmCounterStyle.jsx";

class PPMCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataHeightRatio: 2.5
    };
    this.minChartNumber = 270
    this.chartHeight = 320
  }
  componentDidMount() {
    const maxChartNumber = Math.max.apply(Math, this.props.data.map(function(o) { return parseFloat(o.number); }))
    this.setState({
      dataHeightRatio: this.chartHeight / (maxChartNumber - this.minChartNumber),
    });
  }

  render() {
    const {
      classes,
      data,
    } = this.props;
    const { dataHeightRatio } = this.state;
    return (
      <div className={classes.counterWrapper}>
        {data.map((prop, key) => {
          return (
            <div className={classes.counterElement} key={key} style={{width: (100 / data.length) + "%"}}>
              <AnimateIn type="scaleY">
                <div className={classes.counterLabel}>{prop.label}</div>
                <div className={classes.counterNumber}>{prop.number}</div>
                <div className={classes.counterChart} style={{height: (prop.number - this.minChartNumber) * dataHeightRatio + "px"}}></div>
              </AnimateIn>
            </div>
          );
        })}
      </div>
    )
  }
}

export default withStyles(PPMCounter, ppmCounterStyle)
