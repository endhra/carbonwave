const singleImageCarouselStyle = {
  carousel: {
    textAlign: "right",
    "& .slick-slide": {
      transition: "0.3s",
    },
    "& .slick-track": {
      display: "flex",
    },
  },
  carouselLeft: {
    left: "-100px",
    marginLeft: "-300px",
    "& .slick-current, & .slick-active.slick-current": {
      opacity: "0.3",
    },
    "& .slick-next": {
      "&:before": {
        display: "none",
      },
    },
    "@media (max-width: 959px)": {
      left: "0",
      marginLeft: "0px",
      "& .slick-slide": {
        opacity: "1 !important",
      },
    },
    "@media (min-width: 960px) and (max-width: 1279px)": {
      left: "-50px",
      marginLeft: "-250px",
    },
  },
  carouselRight: {
    right: "-100px",
    marginRight: "-300px",
    paddingBottom: "60px",
    "& .slick-slide": {
      opacity: "0.3",
    },
    "& .slick-active.slick-current": {
      opacity: "1",
    },
    "& .slick-next": {
      position: "absolute",
      bottom: "0",
      right: "400px",
      "&:before": {
        display: "none",
      },
    },
    "@media (max-width: 959px)": {
      right: "0",
      "& .slick-next": {
        right: "300px",
      },
    },
    "@media (min-width: 960px) and (max-width: 1279px)": {
      right: "-50px",
      marginRight: "-250px",
      "& .slick-next": {
        right: "300px",
      },
    },
  },
  carouselImageWrapper: {
    display: "flex !important",
    flexDirection: "column",
    cursor: "pointer",
    marginBottom: "30px",
    minHeight: "1px",
  },
  carouselImageDivider: {
    display: "inline-flex",
    height: "32rem",
    width: "12rem",
    "@media (max-width: 599px)": {
      height: '16rem',
      width: "8rem",
    },
    "@media (min-width: 600px) and (max-width: 767px)": {
      height: '22rem',
    },
    "@media (min-width: 768px) and (max-width: 1279px)": {
      height: '28rem',
    },
  },
  carouselImage: {
    maxHeight: "520px",
    display: "inline-flex !important",
    "@media (max-width: 599px)": {
      maxHeight: '250px',
    },
    "@media (min-width: 600px) and (max-width: 959px)": {
      maxHeight: '350px',
    },
  },
  carouselLeftImage: {
    paddingLeft: "60px",
    alignSelf: "flex-start",
    minHeight: "1px",
    "@media (max-width: 599px)": {
      paddingLeft: "0px",
      marginRight: "20px",
    },
    "@media (min-width: 600px) and (max-width: 959px)": {
      paddingLeft: "0px",
      marginRight: "30px",
    },
  },
  carouselRightImage: {
    marginRight: "60px",
    "@media (max-width: 599px)": {
      marginRight: "20px",
    },
    "@media (min-width: 600px) and (max-width: 959px)": {
      marginRight: "30px",
    },
  },
  dialogWrapper: {
    position: "relative",
    background: "transparent",
    pointerEvents: "none",
    "@media (max-width: 599px)": {
      margin: "10px",
    },
  },
  dialogImageWrapper: {
    minHeight: "1px",
    justifyContent: "center",
    display: "flex",
  },
  dialogImage: {
    maxHeight: "100%",
    objectFit: "contain",
  }
}

export default singleImageCarouselStyle;
