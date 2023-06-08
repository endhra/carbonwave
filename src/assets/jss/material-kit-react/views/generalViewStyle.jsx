import { container, containerFluid, primaryColor, secondaryColor, title } from "assets/jss/material-kit-react.jsx";

const generalViewStyle = {
  // containers and sections
  container,
  containerFluid: {
    ...containerFluid,
    position: "relative",
  },
  containerMobileFull: {
    ...container,
    "@media (max-width: 959px)": {
      maxWidth: "100%",
      padding: "0px",
    },
  },
  containerHalfDesktop: {
    "@media (min-width: 960px)": {
      position: "absolute",
      top: "0",
      bottom: "0",
      width: "50%",
    },
  },
  containerHalfLeft: {
    left: "0",
  },
  containerHalfRight: {
    right: "0",
  },
  containerMobileAbsolute: {
    position: "absolute",
    top: "0",
    bottom: "0",
    width: "100%",
    "@media (min-width: 960px)": {
      display: "none",
    },
  },
  containerMobile: {
    "@media (max-width: 599px)": {
      margin: "60px 30px",
    },
    "@media (min-width: 600px) and (max-width: 767px)": {
      margin: "60px 30px",
    },
    "@media (min-width: 768px) and (max-width: 959px)": {
      maxWidth: "700px",
      margin: "60px auto",
    },
  },
  highlightSection: {
    backgroundColor: primaryColor,
    color: "#ffffff",
  },
  // title and typography
  title: {
    ...title,
  },
  smallTitle: {
    fontSize: "44px",
    margin: "0 0 20px",
    "@media (max-width: 599px)": {
      fontSize: "34px",
    },
    "@media (min-width: 600px) and (max-width: 767px)": {
      fontSize: "40px",
    },
  },
  subtitle: {
    fontSize: "1.3em",
    lineHeight: "1.6em",
    "@media (max-width: 767px)": {
      fontSize: "1em"
    },
    "@media (min-width: 768px) and (max-width: 1279px)": {
      fontSize: "1.2em",
    },
  },
  accentText: {
    fontSize: ".63em",
    lineHeight: "1.4em",
  },
  secondaryText: {
    color: secondaryColor,
    fontStyle: "italic",
    fontSize: "18px",
  },
  textCenter: {
    textAlign: "center"
  },
  spaceBetween: {
    display: "flex",
    justifyContent: "space-between",
  },
  inlineList: {
    fontFamily: `"Degular", "Times New Roman", serif`,
    padding: "0",
    margin: "0",
    listStyle: "none",
    color: "inherit",
  },
  inlineListItem: {
    color: "#000",
    display: "inline-block",
    marginLeft: "40px",
    verticalAlign: "bottom",
    "&:first-of-type": {
      marginLeft: "0",
    },
  },
  // spacings
  marginTop30: {
    marginTop: "30px"
  },
  marginTop40: {
    marginTop: "30px",
    "@media (min-width: 600px)": {
      marginTop: "40px"
    }
  },
  marginTop50: {
    marginTop: "30px",
    "@media (min-width: 600px)": {
      marginTop: "50px"
    }
  },
  marginTop70: {
    marginTop: "30px",
    "@media (min-width: 600px)": {
      marginTop: "70px"
    }
  },
  marginTop100: {
    marginTop: "30px",
    "@media (min-width: 600px)": {
      marginTop: "60px",
    },
    "@media (min-width: 960px)": {
      marginTop: "80px",
    },
    "@media (min-width: 1280px)": {
      marginTop: "100px",
    },
  },
  marginTop110: {
    marginTop: "35px",
    "@media (min-width: 600px)": {
      marginTop: "70px"
    },
    "@media (min-width: 960px)": {
      marginTop: "90px",
    },
    "@media (min-width: 1280px)": {
      marginTop: "110px",
    },
  },
  marginTop130: {
    marginTop: "45px",
    "@media (min-width: 600px)": {
      marginTop: "90px"
    },
    "@media (min-width: 960px)": {
      marginTop: "110px",
    },
    "@media (min-width: 1280px)": {
      marginTop: "130px",
    },
  },
  marginTop140: {
    marginTop: "50px",
    "@media (min-width: 600px)": {
      marginTop: "100px"
    },
    "@media (min-width: 960px)": {
      marginTop: "120px",
    },
    "@media (min-width: 1280px)": {
      marginTop: "140px",
    },
  },
  marginTop150: {
    marginTop: "55px",
    "@media (min-width: 600px)": {
      marginTop: "110px"
    },
    "@media (min-width: 960px)": {
      marginTop: "130px",
    },
    "@media (min-width: 1280px)": {
      marginTop: "150px",
    },
  },
  marginTop200: {
    marginTop: "100px",
    "@media (min-width: 600px)": {
      marginTop: "160px"
    },
    "@media (min-width: 960px)": {
      marginTop: "180px",
    },
    "@media (min-width: 1280px)": {
      marginTop: "200px",
    },
  },
  marginBottom30: {
    marginBottom: "30px"
  },
  marginBottom40: {
    marginBottom: "30px",
    "@media (min-width: 600px)": {
      marginBottom: "40px"
    }
  },
  marginBottom50: {
    marginBottom: "30px",
    "@media (min-width: 600px)": {
      marginBottom: "50px"
    }
  },
  marginBottom70: {
    marginBottom: "30px",
    "@media (min-width: 600px)": {
      marginBottom: "70px"
    }
  },
  marginBottom80: {
    marginBottom: "30px",
    "@media (min-width: 600px)": {
      marginBottom: "70px"
    },
    "@media (min-width: 960px)": {
      marginBottom: "80px",
    },
  },
  marginBottom100: {
    marginBottom: "30px",
    "@media (min-width: 600px)": {
      marginBottom: "70px"
    },
    "@media (min-width: 960px)": {
      marginBottom: "80px",
    },
    "@media (min-width: 1280px)": {
      marginBottom: "100px",
    },
  },
  marginBottom130: {
    marginBottom: "45px",
    "@media (min-width: 600px)": {
      marginBottom: "100px"
    },
    "@media (min-width: 960px)": {
      marginBottom: "110px",
    },
    "@media (min-width: 1280px)": {
      marginBottom: "130px",
    },
  },
  noMargin: {
    margin: "0",
  },
  noMobileMargin: {
    "@media (max-width: 959px)": {
      margin: "0 !important",
    },
  },
  paddingTop30: {
    paddingTop: "30px",
  },
  paddingTop70: {
    paddingTop: "40px",
    "@media (min-width: 600px)": {
      paddingTop: "70px",
    }
  },
  paddingRight80: {
    "@media (min-width: 1280px)": {
      paddingRight: "80px",
    },
  },
  paddingBottom70: {
    paddingBottom: "40px",
    "@media (min-width: 600px)": {
      paddingBottom: "70px",
    }
  },
  customGridMobilePadding: {
    "@media (max-width: 767px)": {
      "&:first-of-type": {
        paddingRight: "0px",
      },
      "&:nth-of-type(n+2)": {
        paddingLeft: "7.5px",
        paddingRight: "7.5px",
      },
      "&:last-child": {
        paddingLeft: "0px",
        paddingRight: "15px",
      },
    },
  },
  contentMargin: {
    "@media (min-width: 1280px)": {
      marginLeft: "120px",
      marginRight: "120px",
    },
  },
  divider: {
    borderTop: "1px solid #B2B2B2",
  },
  // images
  boxImageWrapper: {
    height: "90px",
    width: "100px",
    marginBottom: "10px",
    display: "flex",
    alignItems: "center",
  },
  boxImage: {
    maxHeight: "100%",
  },
  logoImageWrapper: {
    height: "70px",
    maxWidth: "200px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto",
  },
  logoImage: {
    maxHeight: "70px",
  },
  bgImage: {
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },
  image: {
    display: "block",
  },
  // mobile 
  overflowVisible: {
    overflow: "visible !important",
  },
  mobileOrder1: {
    "@media (max-width: 959px)": {
      order: "1",
    }
  },
  mobileOrder2: {
    "@media (max-width: 959px)": {
      order: "2",
    }
  },
  customJustifySpaceBetween: {
    justifyContent: "space-between",
    "@media (min-width: 1280px) and (max-width: 1579px)": {
      justifyContent: "space-around",
    },
  },
  hideOnDesktop: {
    "@media (min-width: 960px)": {
      display: "none",
    },
  },
  hideOnMobile: {
    "@media (max-width: 959px)": {
      display: "none",
    },
  },
};

export default generalViewStyle;
