import {
  primaryColor,
  grayColor,
  roseColor,
  infoColor,
  successColor,
  warningColor,
  dangerColor
} from "assets/jss/material-kit-react.jsx";

const buttonStyle = {
  button: {
    minHeight: "auto",
    minWidth: "auto",
    backgroundColor: "transparent",
    color: "#FFFFFF",
    border: "none",
    position: "relative",
    padding: "0px",
    margin: ".3125rem 1px",
    fontSize: "22px",
    fontFamily: `"Degular", "Times New Roman", serif`,
    fontWeight: "400",
    borderRadius: "0",
    willChange: "box-shadow, transform",
    transition: "0.1s cubic-bezier(0.4, 0, 1, 1)",
    lineHeight: "1.42857143",
    textTransform: "none",
    whiteSpace: "nowrap",
    verticalAlign: "middle",
    touchAction: "manipulation",
    cursor: "pointer",
    "&:hover,&:focus": {
      backgroundColor: "transparent",
      opacity: "0.7",
    },
    "& .fab,& .fas,& .far,& .fal,& .material-icons": {
      position: "relative",
      display: "inline-block",
      top: "0",
      fontSize: "1.5rem",
      marginLeft: "5px",
      verticalAlign: "middle",
    },
    "& svg": {
      position: "relative",
      display: "inline-block",
      height: "1.25em",
      fontSize: "12px",
      padding: "10px",
      transition: "0.1s cubic-bezier(0.4, 0, 1, 1)",
      border: "1px solid #000",
      borderRadius: "50%",
      "@media (max-width: 959px)": {
        fontSize: "12px",
      },
    },
    "& span + svg": {
      marginLeft: "15px",
    },
    "& svg + span": {
      marginLeft: "15px",
    },
    "&$justIcon": {
      "& .fab,& .fas,& .far,& .fal,& .material-icons": {
        marginRight: "0px",
        position: "absolute",
        width: "100%",
        transform: "none",
        left: "0px",
        top: "0px",
        height: "100%",
        lineHeight: "41px",
        fontSize: "20px"
      }
    }
  },
  fullWidth: {
    width: "100%"
  },
  primary: {
    color: "#000",
    "&:hover,&:focus": {
      color: "#000",
    },
    "&:hover": {
      "& svg": {
        opacity: "0.7",
      }
    }
  },
  secondary: {
    fontFamily: '"Open Sans", "Helvetica", "Arial", sans-serif',
    fontWeight: '300',
  },
  info: {
    backgroundColor: infoColor,
    "&:hover,&:focus": {
      backgroundColor: infoColor,
    }
  },
  success: {
    backgroundColor: successColor,
    "&:hover,&:focus": {
      backgroundColor: successColor,
    }
  },
  warning: {
    backgroundColor: warningColor,
    "&:hover,&:focus": {
      backgroundColor: warningColor,
    }
  },
  danger: {
    backgroundColor: dangerColor,
    "&:hover,&:focus": {
      backgroundColor: dangerColor,
    }
  },
  rose: {
    backgroundColor: roseColor,
    "&:hover,&:focus": {
      backgroundColor: roseColor,
    }
  },
  green: {
    backgroundColor: primaryColor,
    "&:hover,&:focus": {
      backgroundColor: primaryColor,
    }
  },
  white: {
    "&,&:focus,&:hover,&:visited": {
      backgroundColor: "#FFFFFF",
      color: grayColor
    }
  },
  twitter: {
    backgroundColor: "#55acee",
    color: "#fff",
    "&:hover,&:focus,&:visited": {
      backgroundColor: "#55acee",
      color: "#fff",
    }
  },
  facebook: {
    backgroundColor: "#3b5998",
    color: "#fff",
    "&:hover,&:focus": {
      backgroundColor: "#3b5998",
      color: "#fff",
    }
  },
  google: {
    backgroundColor: "#dd4b39",
    color: "#fff",
    "&:hover,&:focus": {
      backgroundColor: "#dd4b39",
      color: "#fff",
    }
  },
  github: {
    backgroundColor: "#333333",
    color: "#fff",
    "&:hover,&:focus": {
      backgroundColor: "#333333",
      color: "#fff",
    }
  },
  simple: {
    "& svg": {
      fontSize: "16px",
      padding: "0",
      border: "none",
    },
    "& svg + span": {
      marginLeft: "5px",
    },
  },
  solid: {
    color: "#fff",
    backgroundColor: "#000",
    padding: "12px 40px",
    textTransform: "uppercase",
    "&:hover,&:focus": {
      color: "#fff",
      backgroundColor: "#000",
    },
  },
  disabled: {
    opacity: "0.65",
    pointerEvents: "none"
  },
  lg: {
    fontSize: "30px",
    lineHeight: "1.33em",
    "@media (max-width: 959px)": {
      fontSize: "26px",
      lineHeight: "1.2em",
    },
  },
  sm: {
    fontSize: "18px",
    "@media (min-width: 960px) and (max-width: 1279px)": {
      fontSize: "16px"
    },
  },
  square: {
    backgroundColor: "transparent",
    padding: "12px 30px",
    color: "#000",
    border: "1px solid #000",
    "&:hover,&:focus": {
      color: "#000",
    },
  },
  round: {
    borderRadius: "30px",
    padding: "12px 20px",
    color: "#000",
    border: "1px solid #000",
    "&:hover,&:focus": {
      color: "#000",
    },
    "@media (min-width: 960px) and (max-width: 1279px)": {
      padding: "10px 14px",
    },
  },
  block: {
    width: "100%"
  },
  link: {
    "&,&:hover,&:focus": {
      backgroundColor: "transparent",
      color: "#999999",
    }
  },
  justIcon: {
    paddingLeft: "12px",
    paddingRight: "12px",
    fontSize: "20px",
    height: "41px",
    minWidth: "41px",
    width: "41px",
    "& .fab,& .fas,& .far,& .fal,& svg,& .material-icons": {
      marginRight: "0px"
    },
    "&$lg": {
      height: "57px",
      minWidth: "57px",
      width: "57px",
      lineHeight: "56px",
      "& .fab,& .fas,& .far,& .fal,& .material-icons": {
        fontSize: "30px",
        lineHeight: "56px",
      },
      "& svg": {
        width: "32px",
        height: "32px"
      }
    },
    "&$sm": {
      height: "30px",
      minWidth: "30px",
      width: "30px",
      "& .fab,& .fas,& .far,& .fal,& .material-icons": {
        fontSize: "17px",
        lineHeight: "29px"
      },
      "& svg": {
        width: "17px",
        height: "17px"
      }
    }
  }
};

export default buttonStyle;
