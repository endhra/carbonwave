import React from "react"
// @material-ui/core components
import { withStyles } from "tss-react/mui"

// core components
import AnimateIn from "components/AnimateIn/AnimateIn.jsx"
import GridContainer from "components/Grid/GridContainer.jsx"
import GridItem from "components/Grid/GridItem.jsx"
import Button from "components/CustomButtons/Button.jsx";
// icons
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import generalViewStyle from "assets/jss/material-kit-react/views/generalViewStyle.jsx";

class MainTextSection extends React.Component {
  render() {
    const { classes } = this.props
    let data
    if (this.props.data) {
      data = this.props.data
    } else return null
    return (
      <div className={`${classes.container} ${classes.marginTop50}`}>
        <GridContainer justifyContent="space-between">
          {data.image_boxes.map((image_box, i) => (
            <GridItem xs={12} sm={12} md={4} key={i} className={classes.customGridMobilePadding}>
              <AnimateIn type="slide">
                <div className={`${classes.marginTop30}`}>
                  {(image_box.image_link) ? (
                    <a href={image_box.image_link} rel="noopener noreferrer" target="_blank">
                      <div className={`${classes.hideOnMobile} ${classes.bgImage} ${classes.marginBottom30}`} style={{ backgroundImage: `url("${image_box.image}")`, height: `${image_box.image_height}px` }}></div>
                      <div className={`${classes.hideOnDesktop} ${classes.bgImage} ${classes.marginBottom30}`} style={{ backgroundImage: `url("${image_box.image}")`, height: `${image_box.image_mobile_height}px` }}></div>
                    </a>
                  ) : 
                  <>
                    <div className={`${classes.hideOnMobile} ${classes.bgImage} ${classes.marginBottom30}`} style={{ backgroundImage: `url("${image_box.image}")`, height: `${image_box.image_height}px` }}></div>
                    <div className={`${classes.hideOnDesktop} ${classes.bgImage} ${classes.marginBottom30}`} style={{ backgroundImage: `url("${image_box.image}")`, height: `${image_box.image_mobile_height}px` }}></div>
                  </>
                  }
                  
                  <h4>{image_box.heading}</h4>
                  <p>{image_box.subheading}</p>
                  {(image_box.button_link && image_box.button_label) && (
                    <a href={image_box.button_link} rel="noopener noreferrer" target="_blank">
                      <Button color="primary">
                        <span>{image_box.button_label}</span>
                        <FontAwesomeIcon icon={faChevronRight} fixedWidth />
                      </Button>
                    </a>
                  )}
                </div>
              </AnimateIn>
            </GridItem>
          ))}
        </GridContainer>
      </div>
    )
  }
}

export default withStyles(MainTextSection, generalViewStyle)
