const multipleImagesCarouselStyle = {
  carousel: {
    textAlign: "right",
    paddingTop: "90px",
    "& .slick-track": {
      display: "flex",
    },
    "& .slick-next": {
      position: "absolute",
      top: "0",
      right: "17%",
      "&:before": {
        display: "none",
      },
    },
    "@media (max-width: 599px)": {
      paddingTop: "20px",
      "& .slick-next": {
        display: "none"
      },
    },
    "@media (min-width: 600px) and (max-width: 1279px)": {
      paddingTop: "60px",
      "& .slick-next": {
        right: "5%",
      },
    },
  },
  carouselImageWrapper: {
    position: "relative",
    display: "flex !important",
    flexDirection: "column",
    cursor: "pointer",
    textAlign: "center"
  },
  carouselImage: {
    margin: "0 40px 10px",
    maxHeight: "520px",
    display: "inline-flex !important",
    "@media (max-width: 599px)": {
      margin: "0 10px 10px",
      maxHeight: '250px',
    },
    "@media (min-width: 600px) and (max-width: 959px)": {
      margin: "0 30px 10px",
      maxHeight: '350px',
    },
  },
  carouselImageCaption: {
    opacity: "1",
    transition: ".3s",
    margin: "0 40px",
    "@media (max-width: 599px)": {
      margin: "0 10px",
    },
    "@media (min-width: 600px) and (max-width: 959px)": {
      margin: "0 30px",
    },
  },
}

export default multipleImagesCarouselStyle;
