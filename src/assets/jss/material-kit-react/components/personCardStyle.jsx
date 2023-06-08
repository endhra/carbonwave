import { secondaryColor } from "assets/jss/material-kit-react.jsx";
const personCardStyle = {
  personCardWrapper: {
    textAlign: "center",
    margin: "0 40px",
    "@media (max-width: 599px)": {
      margin: "0",
    },
    "@media (min-width: 600px) and (max-width: 767px)": {
      margin: "0 20px",
    },
  },
  personCardWrapperHovered: {
    cursor: "pointer",
  },
  personAvatar: {
    width: "200px",
    height: "200px",
    margin: "0 auto 30px",
    backgroundSize: "cover",
    "@media (max-width: 599px)": {
      width: "130px",
      height: "130px",
      margin: "0 auto 10px",
    },
  },
  personTitle: {
    "@media (max-width: 599px)": {
      fontSize: "18px",
    },
  },
  personRole: {
    "@media (max-width: 599px)": {
      fontSize: ".9em",
      lineHeight: "1.44em"
    },
  },
  role: {
    margin: "5px 0 0",
    fontSize: ".9em"
  },
  modalWrapper: {
    "@media (max-width: 767px)": {
      margin: "0",
      minHeight: "100%"
    },
  },
  modalContentWrapper: {
    position: "relative",
  },
  modalPhoto: {
    position: "absolute",
    top: "0",
    left: "0",
    width: "500px",
    height: "100%",
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    "@media (max-width: 767px)": {
      width: "100%",
      backgroundPosition: 'center top',
    },
    "@media (min-width: 768px) and (max-width: 959px)": {
      width: "250px",
    },
    "@media (min-width: 960px) and (max-width: 1279px)": {
      width: "400px",
    },
  },
  modalContent: {
    position: "relative",
    marginLeft: "500px",
    padding: "50px 70px",
    minHeight: "65vh",
    "@media (max-width: 767px)": {
      marginLeft: "0",
      padding: "20px 30px",
      minHeight: "100vh",
      background: "rgba(0, 0, 0, 0.45)"
    },
    "@media (min-width: 768px) and (max-width: 959px)": {
      marginLeft: "250px",
      padding: "40px",
    },
    "@media (min-width: 960px) and (max-width: 1279px)": {
      minHeight: "500px",
      marginLeft: "400px",
      padding: "50px 60px",
    },
  },
  modalTitleWrapper: {
    position: "relative",
    padding: "0 0 30px 0",
    marginBottom: "40px",
    "&:after": {
      position: "absolute",
      content: "''",
      width: "60px",
      height: "3px",
      display: "block",
      left: "0",
      bottom: "0",
      backgroundColor: secondaryColor,
    },
  },
  modalTitle: {
    fontSize: "44px",
    margin: "0",
    "@media (max-width: 767px)": {
      color: "#fff"
    },
  },
  modalRole: {
    fontSize: "1em",
    fontWeight: '300',
    lineHeight: "1.6em",
    margin: "0",
    "@media (max-width: 767px)": {
      color: "#fff"
    },
  },
  modalBody: {
    padding: "0",
    "@media (max-width: 767px)": {
      color: "#fff"
    },
  },
  modalList: {
    margin: "0",
    padding: "0",
    listStyle: "none",
  },
  modalListItem: {
    marginBottom: "10px",
  },
  modalCloseButton: {
    color: "#999999",
    position: "absolute",
    top: "20px",
    right: "20px",
    padding: "0",
    margin: "0",
    "@media (max-width: 767px)": {
      color: "#ffffff",
      background: "rgba(0, 0, 0, 0.15)",
    },
  },
  marginBottom70: {
    marginBottom: "70px",
  },
  margin0: {
    margin: "0px",
  },
};

export default personCardStyle;
