const parallaxStyle = {
  parallax: {
    height: "auto",
    minWidth: "100%",
    overflow: "hidden",
    position: "relative",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    margin: "0",
    padding: "0",
    border: "0",
    display: "flex",
    alignItems: "center"
  },
  filter: {
    "&:before": {
      background: "rgba(0, 0, 0, 0.5)"
    },
    "&:after,&:before": {
      position: "absolute",
      zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: "''"
    }
  },
  small: {
    height: "380px"
  },
  container: { 
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    bottom: "47vh",
    "@media (max-width: 1200px)": {
      bottom: "20rem",
    },
  },
  overlay: {
    position: "absolute",
  }
};

export default parallaxStyle;
