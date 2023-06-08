import {
  container,
  defaultFont,
} from "assets/jss/material-kit-react.jsx";

const headerStyle = {
  fixed: {
    position: "fixed",
    zIndex: "1100",
    backgroundColor: "transparent",
    transition: "background-color 300ms"
  },
  navScrolled: {
    color: "#FFFFFF",
    backgroundColor: "#fff",
    borderBottom: "1px solid #E7E7E8",
  },
  container: {
    ...container,
    minHeight: "50px",
    flex: "1",
    alignItems: "center",
    padding: "35px 0",
    justifyContent: "space-between",
    display: "flex",
    flexWrap: "nowrap",
    transition: '300ms',
    '& button': {
      height: '46px',
    },
    "@media (min-width: 600px)": {
      paddingLeft: '0px',
      paddingRight: '0px',
    },
  },
  navSmall: {
    paddingTop: "20px",
    paddingBottom: "20px",
  },
  title: {
    ...defaultFont,
    lineHeight: "30px",
    fontSize: "16px",
    borderRadius: "3px",
    textTransform: "none",
    color: "inherit",
    padding: "8px 0",
    "&:hover,&:focus": {
      color: "inherit",
      background: "transparent"
    }
  },
  headerLogo: {
    width: '15em', 
    animation: 'fadein 1s',
    transition: '300ms',
    "@media (max-width: 599px)": {
      width: '10em'
    },
    "@media (min-width: 600px) and (max-width: 959px)": {
      width: '12em'
    },
    "@media (min-width: 960px) and (max-width: 1279px)": {
      width: '13em'
    },
  },
  headerLogoScrolled: {
    width: '12em',
  },
  drawerPaper: {
    width: "80%",
    "@media (max-width: 599px)": {
      width: "90%",
    },
  },
  modalCloseButton: {
    textAlign: "right",
    '& button': {
      height: '46px',
    },
  },
  modalMenuWrapper: {
    margin: "40px"
  },
  bgImage: {
    position: "absolute",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },
};

export default headerStyle;
