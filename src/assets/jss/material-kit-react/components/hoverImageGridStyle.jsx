import { primaryColor } from "assets/jss/material-kit-react.jsx"

const marineCalculatorStyle = (theme, props, classes) => ({
  element: {
    position: "relative",
    minHeight: "270px",
    textAlign: "center",
    padding: "20px 45px",
    marginBottom: "30px",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    border: `1px solid ${primaryColor}`,
    "@media (max-width: 599px)": {
      padding: "10px",
      minHeight: "220px",
      marginBottom: "0px",
    },
    "@media (min-width: 600px) and (max-width: 959px)": {
      marginBottom: "0px",
      minHeight: "250px",
    },
    "@media (max-width: 1279px)": {
      padding: "20px",
    },
    [`&:hover .${classes.overlay}`]: {
      opacity: 1,
    },
  },
  overlay: {
    display: "flex",
    position: "absolute",
    opacity: 0,
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,.5)",
    transition: "opacity 0.4s ease-in-out 0s",
    color: "#fff",
    padding: "20px 45px",
    alignItems: "center",
  },
  actionLabel: {
    position: "absolute",
    color: primaryColor,
    top: '100%',
    right: '100%',
    transform: 'rotateZ(90deg)',
    width: '200px',
    transformOrigin: '90% 80%',
  }
})

export default marineCalculatorStyle
