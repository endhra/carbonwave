import React from "react";
// nodejs library to set properties for components
import Carousel from "react-slick";
// @material-ui/core components
 import { withStyles } from "tss-react/mui";
import Button from "components/CustomButtons/Button.jsx";
import Dialog from "@mui/material/Dialog";
// icons
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import singleImageCarouselStyle from "assets/jss/material-kit-react/components/singleImageCarouselStyle.jsx";

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

let oldSlide
let newSlide
let slideDirection

// opacity adjustments because of slides cloning in infinite slider
function beforeChangeLeftCarousel(elementId, current, next) {
  if (oldSlide) oldSlide.style.opacity = ''
  if (Math.abs(next - current) === 1) {
    slideDirection = (next - current > 0) ? "next" : "prev";
  }
  else {
    slideDirection = (next - current > 0) ? "prev" : "next";
  }
  if (slideDirection === "next") {
    oldSlide = document.getElementById(elementId).getElementsByClassName("slick-active")[1]
    oldSlide.style.opacity = '0.3';
    newSlide = oldSlide.nextElementSibling;
    newSlide.style.opacity = '1';
  } else {
    oldSlide = document.getElementById(elementId).getElementsByClassName("slick-active")[0]
    oldSlide.style.opacity = '1';
    newSlide = oldSlide.previousElementSibling;
    newSlide.style.opacity = '0.3';
  }
}
function beforeChangeRightCarousel(elementId, current, next) {
  if (oldSlide) oldSlide.style.opacity = ''
  if (Math.abs(next - current) === 1) {
    slideDirection = (next - current > 0) ? "next" : "prev";
  }
  else {
    slideDirection = (next - current > 0) ? "prev" : "next";
  }
  if (slideDirection === "next") {
    if (newSlide) newSlide.style.opacity = '';
    oldSlide = document.getElementById(elementId).getElementsByClassName("slick-active")[0]
    oldSlide.style.opacity = '0.3';
    newSlide = oldSlide.nextElementSibling;
    newSlide.style.opacity = '1';
  } else {
    oldSlide = document.getElementById(elementId).getElementsByClassName("slick-active")[0]
    oldSlide.style.opacity = '0.3';
    newSlide = oldSlide.previousElementSibling;
    newSlide.style.opacity = '1';
  }
}

class SingleImageCarousel extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      modal: true,
      setModal: false,
      current: '',
      current_alt: '',
      mousePosX: 0,
      mousePosY: 0
    }
  }
  handleClickImage = (e, image, image_alt) => {
    var posX = e.clientX;
    var posY = e.clientY;
    if (this.state.mousePosX === posX && this.state.mousePosY === posY && e.button === 0) {
      this.setState({
        current: image,
        current_alt: image_alt,
        setModal: true,
      })
    }
  }
  handleMouseDownImage = (e) => {
    this.setState({
      mousePosX: e.clientX,
      mousePosY: e.clientY,
    })
  }
  handleCloseModal = (e) => {
    e && e.preventDefault();
    this.setState({
      current: '',
      current_alt: '',
      setModal: false,
    })
  }

  render() {
    const {
      elementId,
      classes,
      data,
      alignRight,
    } = this.props;
    const { modal, current, current_alt } = this.state;
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      touchThreshold: 10,
      nextArrow: <NextArrow labelText={data.carousel_next_label} />,
      prevArrow: <PrevArrow />,
      variableWidth: true,
      className: classes.carousel,
      beforeChange: (current, next) => alignRight ? beforeChangeRightCarousel(elementId, current, next) : beforeChangeLeftCarousel(elementId, current, next),
    };
    return (
      <div id={elementId} >
        <Carousel {...settings} className={alignRight ? `${classes.carousel} ${classes.carouselRight}` : `${classes.carousel} ${classes.carouselLeft}`}>
          {alignRight ? 
            data.carousel_images.map((carousel_image, key) => (
              <div key={key} className={classes.carouselImageWrapper}>
                <img className={`${classes.carouselImage} ${classes.carouselRightImage}`} src={carousel_image.image} alt={carousel_image.image_alt}/>
              </div>
            )) :
            data.carousel_images.map((carousel_image, key) => (
              <div key={key} className={classes.carouselImageWrapper}>
                <img className={`${classes.carouselImage} ${classes.carouselLeftImage}`} src={carousel_image.image} alt={carousel_image.image_alt} onMouseDown={ e => this.handleMouseDownImage(e)} onMouseUp={ e => this.handleClickImage(e, carousel_image.image, carousel_image.image_alt)} aria-hidden="true"/>
              </div>
            ))
          }
        </Carousel>
        {current &&
          <Dialog 
            classes={{
              paper: classes.dialogWrapper,
            }}
            PaperProps={{
              square: true,
              elevation: 0,
            }}
            open={modal}
            keepMounted
            maxWidth="lg"
            fullWidth
            onClose={this.handleCloseModal}
            aria-labelledby="modal-slide-title"
            aria-describedby="modal-slide-description"
          >
            <div className={classes.dialogImageWrapper}>
              <img className={classes.dialogImage} src={current} alt={current_alt}/>
            </div>
          </Dialog>
        }
      </div>
    );
  }
}

export default withStyles(SingleImageCarousel, singleImageCarouselStyle);
