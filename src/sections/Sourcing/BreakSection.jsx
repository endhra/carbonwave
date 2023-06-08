import React from "react"
// @material-ui/core components
import { withStyles } from "tss-react/mui"

// core components
import Box from "@mui/material/Box"
import Paper from "@mui/material/Paper"
import GridItem from "components/Grid/GridItem.jsx"
import AnimateIn from "components/AnimateIn/AnimateIn.jsx"
import GridContainer from "components/Grid/GridContainer.jsx"

import generalViewStyle from "assets/jss/material-kit-react/views/generalViewStyle.jsx"

function BreakSection({
  data: { heading, subheading, background_image, background_color },
  classes,
}) {
  return (
    <Paper sx={{ backgroundColor: background_color }} elevation={0}>
      <div
        className={`${classes.container} ${classes.overflowVisible} ${classes.marginTop130}`}
      >
        <GridContainer justifyContent="center">
          <GridItem sm={12} md={8}>
            <Box
              className={`${classes.container} ${classes.paddingTop70} ${classes.paddingBottom70}`}
            >
              <Box display="flex" justifyContent="left">
                <Box>
                  <AnimateIn type="slide">
                    <Box>
                      <Box
                        sx={{
                          fontWeight: 500,
                          fontSize: "1.5em",
                          lineHeight: "1.6em",
                        }}
                      >
                        {heading}
                      </Box>
                      <Box
                        my={3}
                        sx={{
                          height: "1px",
                          width: "70px",
                          border: "1px solid #de6955",
                        }}
                      ></Box>
                      <Box className={classes.subtitle}>{subheading}</Box>
                    </Box>
                  </AnimateIn>
                </Box>
              </Box>
            </Box>
          </GridItem>
          <GridItem
            sm={12}
            md={4}
            sx={{ display: { sm: "none", md: "block" } }}
          >
            {background_image ? (
              <Box
                sx={{
                  width: "100vw",
                  height: "100%",
                  backgroundSize: "contain",
                  maxHeight: "100%",
                  backgroundImage: `url("${background_image}")`,
                }}
              ></Box>
            ) : (
              <></>
            )}
          </GridItem>
          <GridItem
            sm={12}
            md={12}
            sx={{ display: { sm: "block", md: "none" } }}
          >
            {background_image ? (
              <Box>
                <img src={background_image} alt="" />
              </Box>
            ) : (
              <></>
            )}
          </GridItem>
        </GridContainer>
      </div>
    </Paper>
  )
}

export default withStyles(BreakSection, generalViewStyle)
