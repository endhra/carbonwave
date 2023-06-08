import React from "react";
 import { withStyles } from "tss-react/mui";
import AnimateIn from "components/AnimateIn/AnimateIn.jsx";
import MultipleImagesCarousel from "components/MultipleImagesCarousel/MultipleImagesCarousel.jsx";
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
      <div className={classes.marginTop110}>
        <div className={classes.container}>
          <AnimateIn type="slide">
            <h2 className={classes.smallTitle}>{data.heading}</h2>
          </AnimateIn>
        </div>
        <MultipleImagesCarousel data={carousel_data} />
      </div>
    );
  }
}

export default withStyles(CarouselSection, generalViewStyle);
