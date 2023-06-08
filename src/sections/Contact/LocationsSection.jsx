import React from "react";
// @material-ui/core components
 import { withStyles } from "tss-react/mui";
// core components
import AnimateIn from "components/AnimateIn/AnimateIn.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import SingleImageCarousel from "components/SingleImageCarousel/SingleImageCarousel.jsx";
// icons
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import generalViewStyle from "assets/jss/material-kit-react/views/generalViewStyle.jsx";

class LocationsSection extends React.Component {

  render() {
    const { classes } = this.props
    let data
    if(this.props.data)
      data = this.props.data
    else
      return null
    return (
      <div className={`${classes.container} ${classes.overflowVisible} ${classes.marginTop70} ${classes.marginBottom100}`}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <AnimateIn type="slide">
              <h2 className={classes.marginBottom40}>{data.heading}</h2>
            </AnimateIn>
          </GridItem>
        </GridContainer>
        {data.locations.map((location, i) => (
        <GridContainer key={i}>
          {i !== 0 ? 
            <GridItem xs={12} sm={12} md={12} className={`${classes.marginTop70} ${classes.marginBottom70} ${classes.hideOnMobile}`}>
              <div className={classes.divider}></div>
            </GridItem> 
          : null}
          <GridItem xs={12} sm={12} md={5} lg={4} className={classes.marginBottom50}>
            <AnimateIn type="slide">
              <h3 className={`${classes.smallTitle} ${classes.marginTop30}`}>{location.heading}</h3>
              <p>{location.subheading}</p>
              <h4 className={classes.marginTop30}>{location.address_label}</h4>
              <p className={classes.noMargin}>{location.address_content}</p>
              {location.address_link ? 
              <Button size="sm" color="primary" target="_blank" href={location.address_link} simple>
                <FontAwesomeIcon icon={faMapMarkerAlt} fixedWidth />
                <span>{location.address_button_label}</span>
              </Button>
              : null
              }
              <h4 className={classes.marginTop30}>{location.email_label}</h4>
              <p className={classes.noMargin}>{location.email_content}</p>
            </AnimateIn>
          </GridItem>
          <GridItem xs={12} sm={12} md={7} lg={8}>
            <SingleImageCarousel elementId={`image-carousel-${i}`}
              data={{carousel_images: location.carousel_images, carousel_next_label: location.carousel_next_label}}
              alignRight
            />
          </GridItem>
        </GridContainer>
        ))}
      </div>
    );
  }
}

export default withStyles(LocationsSection, generalViewStyle);
