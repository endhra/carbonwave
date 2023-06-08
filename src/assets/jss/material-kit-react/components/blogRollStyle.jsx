import { title } from "assets/jss/material-kit-react.jsx"

const blogRollStyle = {
  link: {
    color: "primaryColor",
    textDecoration: "none",
    fontWeight: "700",
    textTransform: "uppercase",
    backgroundColor: "transparent",
    "&:hover,&:focus": {
      textDecoration: "none",
      color: "#185474",
    },
  },

  linkAsTitle: {
    ...title,
    margin: "0 0 1.25rem",
    fontSize: "22px",
    textDecoration: "none",
    backgroundColor: "transparent",
    "&:hover,&:focus": {
      textDecoration: "none",
      color: "#185474",
    },
  },

  date: {
    fontSize: "16px",
  },

  backgroundImageStyle: {
    borderRadius: "0.5rem",
    marginBottom: "20px",
    width: "300",
    height: "200px",
    backgroundPosition: "50% 50%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },

  marginBottom70: {
    marginBottom: "70px",
  },
  
  noTopBottomMargin: {
    marginTop: "0",
    marginBottom: "0",
  },

  minHeight150:{
    minHeight:"150px"
  }
}

export default blogRollStyle
