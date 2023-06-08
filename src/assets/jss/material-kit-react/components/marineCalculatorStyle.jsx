import {
  primaryColor,
} from "assets/jss/material-kit-react.jsx";

const marineCalculatorStyle = {
  calculatorElement: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    minHeight: '270px',
    textAlign: 'center',
    padding: '20px 45px',
    marginBottom: '30px',
    border: `1px solid ${primaryColor}`,
    "@media (max-width: 599px)": {
      padding: '10px',
      minHeight: '220px',
      marginBottom: '0px',
    },
    "@media (min-width: 600px) and (max-width: 959px)": {
      marginBottom: '0px',
      minHeight: '250px',
    },
    "@media (max-width: 1279px)": {
      padding: '20px',
    },
  },
  customMobilePadding: {
    "@media (max-width: 599px)": {
      "&:nth-child(2n+1)": {
        paddingRight: "5px",
      },
      "&:nth-child(2n+2)": {
        paddingLeft: "5px",
      },
    },
  },
  calculatorUnit: {
    position: 'relative',
    fontSize: '22px',
    fontWeight: '400',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    "@media (max-width: 599px)": {
      fontSize: '18px',
    },
    "@media (min-width: 600px) and (max-width: 1279px)": {
      fontSize: '20px',
    },
  },
  calculatorValue: {
    position: 'relative',
    fontSize: '84px',
    lineHeight: '1em',
    fontFamily: `'Degular', 'Times New Roman', serif`,
    marginTop: '10px',
    marginBottom: '20px',
    pointerEvents: 'none',
    "@media (max-width: 599px)": {
      marginTop: '0px',
      marginBottom: '10px',
      fontSize: "40px"
    },
    "@media (min-width: 600px) and (max-width: 767px)": {
      fontSize: "50px"
    },
    "@media (min-width: 768px) and (max-width: 959px)": {
      fontSize: "60px"
    },
    "@media (min-width: 960px) and (max-width: 1279px)": {
      fontSize: "70px"
    },
  },
  calculatorTitle: {
    position: 'relative',
    fontSize: '22px',
    lineHeight: '1.3em',
    "@media (max-width: 599px)": {
      fontSize: '18px',
    },
    "@media (min-width: 600px) and (max-width: 1279px)": {
      fontSize: '20px',
    },
  },
  calculatorElementSlider: {
    position: 'relative',
  },
  calculatorSliderWrapper: {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
  },
  calculatorSliderFill: {
    position: 'absolute',
    bottom: '0',
    left: '0',
    height: '30px',
    width: '100%',
    backgroundColor: primaryColor,
  },
  calculatorSliderRange: {
    position: 'absolute',
    bottom: '-60px',
    left: '-30px',
    width: '300px',
    height: '60px',
    transform: 'rotateZ(-90deg)',
    transformOrigin: '0 0',
    cursor: 'pointer',
    opacity: '0',
    "@media (max-width: 767px)": {
      bottom: '-40px',
      left: '-20px',
      height: '40px',
    },
  },
  calculatorSliderThumb: {
    position: 'absolute',
    bottom: '0',
    left: '-30px',
    width: '60px',
    height: '60px',
    background: "#fff",
    border: `1px solid ${primaryColor}`,
    borderRadius: '50%',
    pointerEvents: 'none',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    "@media (max-width: 767px)": {
      left: '-20px',
      width: '40px',
      height: '40px',
    },
    "& svg": {
      "@media (max-width: 767px)": {
        fontSize: '12px',
      },
    }
  },
  calculatorSliderLabel: {
    position: 'absolute',
    bottom: '100%',
    right: '100%',
    width: '200px',
    textAlign: 'right',
    color: primaryColor,
    transform: 'rotateZ(90deg)',
    transformOrigin: '100% 80%',
    "& svg": {
      fontSize: '14px',
      marginLeft: '5px',
      verticalAlign: 'middle',
    },
  },
  calculatorSliderValue: {
    display: 'none',
  },
  accentText: {
    position: 'absolute',
    left: '0',
    bottom: '0',
    fontSize: '.63em',
    lineHeight: '1.4em',
    "@media (max-width: 599px)": {
      top: '100%',
      bottom: 'auto',
    },
  },
}

export default marineCalculatorStyle;