import { container, successColor, warningColor } from "assets/jss/material-kit-react.jsx";

const footerStyle = {
  footerContainer: {
    borderTop: '1px solid #E7E7E8',
  },
  container: {
    paddingTop: '80px',
    paddingBottom: '60px',
    ...container,
    "@media (max-width: 959px)": {
      paddingTop: '40px',
      paddingBottom: '30px',
    },
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
  },
  listItem: {
    paddingTop: 0,
    paddingBottom: 0,
    "@media (max-width: 959px)": {
      padding: "0",
      justifyContent: "center",
    },
  },
  logo: {
    maxWidth: '110px',
    "@media (max-width: 599px)": {
      maxWidth: '80px',
      marginBottom: '10px',
    },
    "@media (max-width: 959px)": {
      textAlign: "center",
    },
  },
  inlineForm: {
    display: 'flex',
    margin: '30px 0 10px',
    "@media (max-width: 959px)": {
      margin: '20px 0 10px',
    },
  },
  inlineInput: {
    flexGrow: '2',
    "& label": {
      transform: "translate(14px, 17px) scale(1)",
    },
    "& fieldset": {
      borderRadius: '0px',
      borderColor: '#000',
      borderWidth: "1px"
    },
    "& input": {
      padding: '16px 14px',
      borderRadius: '0px',
      borderColor: '#000'
    }
  },
  inlineButton: {
    margin: '0',
  },
  socialMedias: {
    marginTop: '20px',
    marginBottom: '40px',
    "@media (max-width: 959px)": {
      margin: "10px 0 30px",
    }
  },
  socialMediaLink: {
    color: '#000',
    fontSize: '30px',
    marginRight: '15px',
    "&:last-child": {
      marginRight: '0px',
    },
    "& svg": {
      width: '1em',
    },
  },
  spaceBetween: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "@media (max-width: 599px)": {
      flexDirection: "column"
    },
  },
  footerText: {
    textTransform: 'uppercase',
    "@media (max-width: 599px)": {
      marginBottom: "20px"
    },
  },
  mobileCenter: {
    "@media (max-width: 959px)": {
      textAlign: "center",
    },
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
  success: {
    color: successColor,
  },
  warning: {
    color: warningColor,
  },
};
export default footerStyle;
