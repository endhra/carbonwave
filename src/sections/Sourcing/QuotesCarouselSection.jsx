import React from "react"
import Slider from "react-slick"

import Box from "@mui/material/Box"
import Button from "components/CustomButtons/Button.jsx"
import AnimateIn from "components/AnimateIn/AnimateIn.jsx"

// icons
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { withStyles } from "tss-react/mui"

import generalViewStyle from "assets/jss/material-kit-react/views/generalViewStyle.jsx"

function PrevArrow(props) {
  const { onClick } = props
  return (
    <Box sx={{ position: "absolute", top: "30%", left: 0, zIndex: 100 }}>
      <Button size="lg" color="primary" onClick={onClick}>
        <FontAwesomeIcon icon={faChevronLeft} fixedWidth />
      </Button>
    </Box>
  )
}

function NextArrow(props) {
  const { onClick } = props
  return (
    <Box sx={{ position: "absolute", top: "30%", right: 0, zIndex: 1 }}>
      <Button size="lg" color="primary" onClick={onClick}>
        <FontAwesomeIcon icon={faChevronRight} fixedWidth />
      </Button>
    </Box>
  )
}

function Slide({ quoteData }) {
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Box
        pt={4}
        pb={2}
        sx={{
          width: "75%",
          fontSize: "20px",
          fontWeight: "500",
          color: "#37383a",
        }}
      >
        "{quoteData.quote}"
      </Box>
      <Box px={10} sx={{ textAlign: "end", width: "90%" }}>
        — {quoteData.source_name}, {quoteData.source_place}
      </Box>
    </Box>
  )
}

function QuotesCarouselSection({ data: { quotes, heading }, classes }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  }

  return (
    <Box
      pb={2}
      display="flex"
      alignItems="center"
      sx={{ backgroundColor: "#FFE7C5", minHeight: "400px" }}
    >
      <Box className={`${classes.container} ${classes.overflowVisible}`}>
        <AnimateIn type="slide">
        <Box textAlign="center">
          <Box component="h2" mb={1}>
            {heading}
          </Box>
        </Box>
        {quotes.length === 1 ? (
          <Slide quoteData={quotes[0]} />
        ) : (
          <Slider {...settings}>
            {quotes.map((quote) => (
              <Slide key={quote.quote} quoteData={quote} />
            ))}
          </Slider>
        )}
        </AnimateIn>
      </Box>
    </Box>
  )
}

export default withStyles(QuotesCarouselSection, generalViewStyle)
