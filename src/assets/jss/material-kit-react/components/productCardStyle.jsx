import { title } from "assets/jss/material-kit-react.jsx";

const productCardStyle = {
  cardWrapper: {
    position: "relative",
    textAlign: "center",
    marginBottom: "70px",
  },
  productImage: {
    width: "180px",
    height: "180px",
    margin: "0 auto",
    backgroundSize: "cover",
    borderRadius: "50%",
  },
  title: {
    ...title,
    transition: ".2s",
    marginBottom: "0",
  },  
  role: {
    margin: "5px 0 0",
    fontSize: ".9em"
  }
};

export default productCardStyle;
