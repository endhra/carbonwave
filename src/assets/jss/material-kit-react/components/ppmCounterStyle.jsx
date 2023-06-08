import {
  primaryColor,
} from "assets/jss/material-kit-react.jsx";

const ppmCounterStyle = {
  counterWrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    "@media (max-width: 599px)": {
      justifyContent: "space-between",
      textAlign: "left",
    }
  },
  counterElement: {
    paddingRight: '20px',
    textAlign: 'center',
    "&:last-child": {
      paddingRight: '0px',
    },
    "@media (max-width: 599px)": {
      paddingRight: '10px',
      "&:last-child": {
        paddingRight: '0px',
      },
    },
  },
  counterLabel: {
    fontWeight: '300',
    fontSize: '18px',
    "@media (max-width: 599px)": {
      fontSize: '16px',
    },
  },
  counterNumber: {
    fontSize: '26px',
    fontFamily: `"Degular", "Times New Roman", serif`,
    marginBottom: '20px',
    "@media (max-width: 599px)": {
      fontSize: '20px',
      marginBottom: '10px',
    },
    "@media (min-width: 600px) and (max-width: 959px)": {
      fontSize: '24px',
    },
  },
  counterChart: {
    backgroundColor: primaryColor,
    transformOrigin: 'bottom left',
  }
};

export default ppmCounterStyle;
