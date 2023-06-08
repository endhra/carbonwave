import {
  primaryColor,
  dangerColor,
  successColor,
} from "assets/jss/material-kit-react.jsx";

const customInputStyle = (theme, props, classes) => ({
  disabled: {
    "&:before": {
      borderColor: "transparent"
    }
  },
  underline: {
    "&:hover:not($disabled):before,&:before": {
      borderColor: "#000",
      borderWidth: "1px"
    },
    "&:after": {
      borderColor: primaryColor
    }
  },
  underlineError: {
    "&:after": {
      borderColor: dangerColor
    }
  },
  underlineSuccess: {
    "&:after": {
      borderColor: successColor
    }
  },
  whiteUnderline: {
    "&:hover:not($disabled):before,&:before": {
      borderColor: "#FFFFFF"
    },
    "&:after": {
      borderColor: "#FFFFFF"
    }
  },
  labelRoot: {
    fontFamily: '"Open Sans", "Helvetica", "Arial", sans-serif',
    fontWeight: "300",
    fontSize: "18px",
    color: "#333 !important",
    lineHeight: "1.42857",
    transform: "translate(0, 1.5px)",
    [`& + .${classes.underline}`]: {
      marginTop: "0px",
    },
  },
  labelRootError: {
    color: dangerColor + " !important"
  },
  labelRootSuccess: {
    color: successColor + " !important"
  },
  formControl: {
    margin: "0 0 20px 0",
    paddingTop: "27px",
    position: "relative",
    "& svg,& .fab,& .far,& .fal,& .fas,& .material-icons": {
      color: "#000"
    }
  },
  input: {
    color: "#000",
    marginTop: '0px',
    "&,&::placeholder": {
      fontSize: "14px",
      fontFamily: '"Open Sans", "Helvetica", "Arial", sans-serif',
      fontWeight: "400",
      lineHeight: "1.42857",
      opacity: "1"
    },
    "&::placeholder": {
      color: "#000"
    }
  },
  whiteInput: {
    "&,&::placeholder": {
      color: "#FFFFFF",
      opacity: "1  "
    }
  }
});

export default customInputStyle;
