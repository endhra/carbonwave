import React from "react";
import { Link } from "gatsby"
// @material-ui/core components
 import { withStyles } from "tss-react/mui";

// core components
import AnimateIn from "components/AnimateIn/AnimateIn.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Paper from "@mui/material/Paper";
import Button from "components/CustomButtons/Button.jsx";
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import generalViewStyle from "assets/jss/material-kit-react/views/generalViewStyle.jsx";

class CallToActionSection extends React.Component {

  render() {
    const { classes, data, langKey } = this.props;
    const bgStyle = data.background_image ? { backgroundImage: `url("${data.background_image}")` } : {backgroundColor: data.background_color}
    return (
      <Paper style={bgStyle} className={classes.bgImage} elevation={0}>
        <div className={`${classes.container} ${classes.paddingTop70} ${classes.paddingBottom70} ${classes.bgImage} ${classes.textCenter}`} style={{ backgroundImage: `url("${data.background_image}")` }}>
          <GridContainer justifyContent="center">
            <GridItem xs={12} sm={10} md={9}>
                <AnimateIn type="slide">
                  <div>
                    <h3>{data.heading}</h3>
                    {data.subheading && <div className={classes.subtitle}>{data.subheading}</div>}
                    <GridContainer alignItems="center" justifyContent="center" className={classes.marginTop40}>
                      {data.logo_images.map((logo_image, key) => (
                      <GridItem xs={6} sm={4} md={3} key={key} className={classes.marginBottom30}>
                        <div className={classes.logoImageWrapper}>
                          {logo_image.image_link ? 
                            <a href={logo_image.image_link} rel="noopener noreferrer" target="_blank">
                              <img className={classes.logoImage} src={logo_image.image} alt={logo_image.image_alt}/>
                            </a>
                          :
                          <img className={classes.logoImage} src={logo_image.image} alt={logo_image.image_alt}/>
                        }
                        </div>
                      </GridItem>
                      ))}
                    </GridContainer>
                    {data.button_label && 
                      <Link to={langKey === 'en' ? data.button_link : '/es' + data.button_link}>
                        <Button size="lg" color="primary">
                          <span>{data.button_label}</span>
                          <FontAwesomeIcon icon={faChevronRight} fixedWidth />
                        </Button>
                      </Link>
                    }
                  </div>
                </AnimateIn>
            </GridItem>
          </GridContainer>
        </div>
      </Paper>
    );
  }
}

export default withStyles(CallToActionSection, generalViewStyle);
