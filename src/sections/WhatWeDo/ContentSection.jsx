import React from "react"
import { Link } from "gatsby"
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

class ContentSection extends React.Component {
  render() {
    const { classes, langKey } = this.props
    let data
    if (this.props.data) {
      data = this.props.data
    } else return null
    return (
      <div className={classes.container}>
        <GridContainer withMargin justifyContent="space-between" alignItems="center">
          <GridItem xs={12} sm={12} md={4}>
            <div>
              <AnimateIn type="slide">
                <h2 className={`${classes.smallTitle} ${classes.marginBottom40}`}>{data.left_side.heading}</h2>
                <p className={classes.marginBottom30}>{data.left_side.subheading}</p>
                <Link to={langKey === 'en' ? data.left_side.button_link : '/es' + data.left_side.button_link} className={classes.hideOnMobile}>
                  <Button size="lg" color="primary">
                    <span>{data.left_side.button_label}</span>
                    <FontAwesomeIcon icon={faChevronRight} fixedWidth />
                  </Button>
                </Link>
              </AnimateIn>
            </div>
          </GridItem>
          <GridItem xs={12} sm={12} md={7}>
            <div>
              <AnimateIn type="slide">
                <img src={data.right_side.image} alt={data.right_side.image_alt} />
              </AnimateIn>
            </div>
          </GridItem>
          <GridItem xs={12} sm={12} className={`${classes.hideOnDesktop} ${classes.marginTop50} ${classes.textCenter}`}>
            <Link to={langKey === 'en' ? data.left_side.button_link : '/es' + data.left_side.button_link}>
              <Button size="lg" color="primary">
                <span>{data.left_side.button_label}</span>
                <FontAwesomeIcon icon={faChevronRight} fixedWidth />
              </Button>
            </Link>
          </GridItem>
        </GridContainer>
      </div>
    )
  }
}

export default withStyles(ContentSection, generalViewStyle)
