import React from "react";
// nodejs library to set properties for components
import Carousel from "react-slick";
// @material-ui/core components
 import { withStyles } from "tss-react/mui";
import Button from "components/CustomButtons/Button.jsx";
// icons
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import multipleImagesCarouselStyle from "assets/jss/material-kit-react/components/multipleImagesCarouselStyle.jsx";

function PrevArrow() {
  return '';
}

function NextArrow(props) {
  const { className, labelText, onClick } = props;
  return (
    <div className={className}>
      <Button size="lg" color="primary" onClick={onClick}>
        <span>{labelText}</span>
        <FontAwesomeIcon icon={faChevronRight} fixedWidth />
      </Button>
    </div>
  );
}

let element, captionInVieport

// opacity adjustments for image slide image caption
function afterChangeCarousel(current, next) {
  document.querySelectorAll(".slick-slide span").forEach(function(caption) {
    element = caption.getBoundingClientRect();
    captionInVieport = (
      element.top >= 0 &&
      element.left >= 0 &&
      element.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      element.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    if (captionInVieport) {
      caption.style.opacity = '1';
    } else {
      caption.style.opacity = '0';
    }
  });
}

class MultipleImagesCarousel extends React.Component {
  render() {
    const {
      classes,
      data,
    } = this.props;
    const settings = {
      dots: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
      speed: 1000,
      slidesToScroll: 1,
      touchThreshold: 20,
      pauseOnHover: false,
      nextArrow: <NextArrow labelText={data.carousel_next_label} />,
      prevArrow: <PrevArrow />,
      className: classes.carousel,
      variableWidth: true,
      afterChange: (current, next) => afterChangeCarousel(current, next)
    };
    return (
      <Carousel {...settings} className={classes.carousel}>
        {data.carousel_images.map((carousel_image, key) => (
          <div key={key} className={classes.carouselImageWrapper}>
            <img className={classes.carouselImage} src={carousel_image.image} alt={carousel_image.image_alt}/>
            {carousel_image.caption ? <span className={classes.carouselImageCaption}>{carousel_image.caption}</span> : null}
          </div>
        ))}
      </Carousel>
    );
  }
}

export default withStyles(MultipleImagesCarousel, multipleImagesCarouselStyle);
