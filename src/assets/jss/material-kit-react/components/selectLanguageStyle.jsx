const selectLanguageStyle = {
  selectLanguageList: {
    listStyleType: "none",
    padding: "0px",
  },
  selectLanguageListItem: {
    display: "inline-block",
    color: "#000",
    marginLeft: "20px",
    "&:first-of-type": {
      marginLeft: "0px",
    },
  },
  selectLanguageListLink: {
    color: "#000",
    fontSize: "18px",
    lineHeight: "18px",
    display: "inline-flex",
    "&:hover, &:active, &:focus, &:active:focus": {
      color: "#000",
      borderBottom: "2px solid #000",
    },
  },
  langActive: {
    borderBottom: "2px solid #000",
  }
};

export default selectLanguageStyle;
