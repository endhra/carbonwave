import { container, title, successColor, warningColor } from "assets/jss/material-kit-react.jsx";

const introStyle = {
  container: {
    ...container,
    paddingTop: "190px",
    paddingBottom: "190px",
    "@media (max-width: 767px)": {
      padding: "100px 30px 60px",
    },
    "@media (min-width: 768px) and (max-width: 959px)": {
      paddingTop: "100px",
      paddingBottom: "100px",
    },
    "@media (min-width: 960px) and (max-width: 1279px)": {
      paddingTop: "140px",
      paddingBottom: "140px",
    },
  },
  smallContainer: {
    ...container,
    paddingTop: "200px",
    paddingBottom: "100px",
    "@media (max-width: 1279px)": {
      paddingTop: "130px",
    },
  },
  bgImage: {
    position: "absolute",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  title: {
    margin: "1.75rem 0",
    "@media (max-width: 767px)": {
      margin: "1.75rem 0 0",
    },
  },
  smallTitle: {
    ...title
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
    fontSize: ".66em",
    lineHeight: "1.4em",
  },
  buttonWrapper: {
    marginTop: "2.5rem",
  },
  formControlLabel: {
    fontFamily: '"Open Sans", "Helvetica", "Arial", sans-serif',
    fontWeight: "300",
    fontSize: "18px",
    color: "#333 !important",
    lineHeight: "1.42857",
    marginRight: "30px",
    "& span": {
      fontFamily: '"Open Sans", "Helvetica", "Arial", sans-serif',
      fontWeight: "300",
    }
  },
  formControlCheckbox: {
    padding: "2px 12px",
  },
  formControlMessage: {
    marginLeft: "20px",
    "@media (max-width: 1279px)": {
      margin: "10px 0 -40px 0",
      display: "block",
      lineHeight: "30px",
    },
  },
  marginTop20: {
    marginTop: "20px",
  },
  marginTop40: {
    marginTop: "40px",
  },
  marginBottom10: {
    marginBottom: "10px",
  },
  noMobileMargin: {
    "@media (max-width: 959px)": {
      margin: "0 !important",
    },
  },
  visibleDesktop: {
    display: "none",
    "@media (min-width: 768px)": {
      display: "block",
    },
  },
  visibleMobile: {
    display: "none",
    backgroundPosition: "center",
    "@media (max-width: 767px)": {
      display: "block",
    },
  },
  posR: {
    position: "relative",
  },
  success: {
    color: successColor,
  },
  warning: {
    color: warningColor,
  },
};

export default introStyle;
