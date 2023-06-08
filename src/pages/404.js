import React from 'react'
import { Link } from "gatsby"
import { withStyles } from "tss-react/mui"
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

import generalViewStyle from "assets/jss/material-kit-react/views/generalViewStyle.jsx";

// core components
import Layout from "components/Layouts/Layout.js"

const browser = typeof window !== "undefined" && window;

const NotFoundPage = (props) => {
  const { classes } = props
  return (
    browser && (
      <Layout>
        <div style={{backgroundColor: "#FDDDCF", overflow: "hidden"}}>
          <div className={classes.container}>
            <GridContainer justifyContent="center" alignItems="center">
              <GridItem xs={12} sm={10} md={8} lg={6} className={`${classes.marginTop130} ${classes.marginBottom130}`}>
                <div className={`${classes.marginTop130} ${classes.marginBottom130} ${classes.textCenter}`}>
                  <h1 className={classes.title}>Oops!</h1>
                  <p>We can't seem to find the page you are looking for.</p>
                  <Link to='/'>
                    <h4>
                      Home
                    </h4>
                  </Link>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </Layout>
    )
  );
};

export default withStyles(NotFoundPage, generalViewStyle)
