import React from 'react';
// @material-ui/core components
 import { withStyles } from "tss-react/mui";

// core components
import AnimateIn from "components/AnimateIn/AnimateIn.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import PPMCounter from "components/PPMCounter/PPMCounter.jsx";

import generalViewStyle from "assets/jss/material-kit-react/views/generalViewStyle.jsx";

class CounterSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counterPPM: ''
    };
  }

  componentDidMount() {
    fetch('data.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then((response) => {
        return response.json()
      })
      .then((response) => {
        if (Object.keys(response.data).length) {
          this.setState({ counterPPM: response.data[response.data.length-1].ppm })
        }
      })
      .catch(() => {return ''})
  }

  render() {
    const { classes } = this.props;
    const { counterPPM } = this.state;
    let data
    if (this.props.data)
      data = this.props.data
    else
      return null
    let ppmData = [
      {
        label: '1960',
        number: '316.91'
      },
      {
        label: '1980',
        number: '338.75'
      },
      {
        label: '2000',
        number: '369.55'
      },
      {
        label: data.counter_date,
        number: counterPPM ? counterPPM : '414.91'
      },
    ]
    return (
      <div className={`${classes.container} ${classes.marginTop140} ${classes.marginBottom100}`} id="counter-ppm">
        <GridContainer justifyContent="space-between">
          <GridItem xs={12} sm={12} md={7} lg={6} className={classes.marginBottom30}>
            <AnimateIn type="slide">
              <div>
                <h2>{data.heading}</h2>
                <div className={classes.subtitle}>{data.subheading}</div>
              </div>
            </AnimateIn>
          </GridItem>
          <GridItem xs={12} sm={12} md={5} lg={5}>
            <PPMCounter data={ppmData} />
            <AnimateIn type="slide">
              <div className={`${classes.marginTop30} ${classes.marginBottom50}`}>
                <p className={classes.accentText}>{data.counter_text}</p>
              </div>
            </AnimateIn>
          </GridItem>
          {data.image_boxes.map((image_box, i) => (
            <GridItem xs={12} sm={12} md={4} key={i}>
              <AnimateIn type="slide">
                <div className={`${classes.marginTop30} ${classes.paddingRight80}`}>
                  <div className={classes.boxImageWrapper}>
                    <img className={classes.boxImage} alt={image_box.image_alt} src={image_box.image} />
                  </div>
                  <h4>{image_box.heading}</h4>
                  <p>{image_box.subheading}</p>
                </div>
              </AnimateIn>
            </GridItem>
          ))}
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(CounterSection, generalViewStyle);
