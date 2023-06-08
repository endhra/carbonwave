import React from "react";
 import { withStyles } from "tss-react/mui";
import AnimateIn from "components/AnimateIn/AnimateIn.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import SingleImageCarousel from "components/SingleImageCarousel/SingleImageCarousel.jsx";
import generalViewStyle from "assets/jss/material-kit-react/views/generalViewStyle.jsx";

class CarouselSection extends React.Component {
  
  render() {
    const { classes } = this.props;
    let data
    if(this.props.data)
      data = this.props.data
    else
      return null
    const carousel_data = {carousel_images: data.carousel_images, carousel_next_label: data.carousel_next_label}
    return (
      <div className={`${classes.container} ${classes.overflowVisible}`}>
        <GridContainer withMargin alignItems="center">
          <GridItem xs={12} sm={12} md={6} className={classes.mobileOrder2}>
            {data.carousel_images.length === 1 ?
            <img src={data.carousel_images[0].image} className={classes.paddingRight80} alt={data.carousel_images[0].image_alt} />
            : <SingleImageCarousel elementId={`image-carousel-landing`} data={carousel_data} />
            }
          </GridItem>
          <GridItem xs={12} sm={12} md={6} lg={5} className={`${classes.noMobileMargin} ${classes.mobileOrder1}`}>
            <AnimateIn type="slide">
              <h2 className={classes.marginBottom50}>{data.heading}</h2>
              <div className={classes.marginBottom50}>{data.subheading}</div>
            </AnimateIn>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(CarouselSection, generalViewStyle);
