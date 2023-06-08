const headerLinksStyle = theme => ({
  list: {
    fontFamily: `"Degular", "Times New Roman", serif`,
    listStyle: "none",
    color: "inherit",
    animation: 'fadein 1s',
    flexDirection: 'row',
    padding: 0,
    "@media (max-width: 959px)": {
      display: "block",
    },
  },
  listItem: {
    color: "#000",
    padding: "0",
    display: "inline-block",
    marginLeft: "50px",
    width: "auto",
    cursor: "pointer",
    "@media (max-width: 959px)": {
      display: "block",
      margin: "30px 0",
    },
    "@media (min-width: 960px) and (max-width: 1279px)": {
      marginLeft: "40px",
    },
  },
  navLink: {
    color: "#000",
    position: "relative",
    fontSize: "22px",
    lineHeight: "29px",
    textDecoration: "none",
    margin: "0px",
    cursor: "pointer",
    display: "inline",
    "&:hover, &:active, &:focus, &:active:focus": {
      color: "#000",
      borderBottom: "2px solid #000",
    },
    "@media (max-width: 959px)": {
      fontSize: "36px",
      lineHeight: "36px",
    }
  },
  navLinkActive: {
    borderBottom: "2px solid #000",
  },
  dropdownLink: {
    "&,&:hover,&:focus": {
      color: "inherit",
      textDecoration: "none",
      display: "block",
      padding: "10px 20px"
    }
  },
  marginRight5: {
    marginRight: "5px"
  }
});

export default headerLinksStyle;
