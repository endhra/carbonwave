const twitterWidgetStyle = {
  widgetWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: '40px',
    minHeight: '420px',
    background: 'rgba(255, 255, 255, 0.90)',
    alignContent: 'space-between',
    "@media (max-width: 600px)": {
      minHeight: '440px',
    },
    "@media (max-width: 767px)": {
      padding: '40px 15px 40px',
    },
    "@media (min-width: 768px) and (max-width: 959px)": {
      padding: '40px 40px 30px',
      maxWidth: "700px",
      margin: "60px auto",
      minHeight: '410px',
    },
    "@media (min-width: 960px) and (max-width: 1279px)": {
      padding: '20px 10px',
      minHeight: '450px',
    },
    "@media (min-width: 1280px) and (max-width: 1579px)": {
      padding: '40px 30px',
      minHeight: '470px',
    },
  },
  widgetItem: {
    alignItems: 'center',
    display: 'flex',
  },
  widgetProfilePhoto: {
    width: '60px',
    height: '60px',
    "@media (max-width: 599px)": {
      width: '45px',
      height: '45px',
    },
    "@media (min-width: 960px) and (max-width: 1279px)": {
      width: '40px',
      height: '40px',
    },
  },
  widgetProfileName: {
    paddingLeft: '14px',
    fontSize: '30px',
    color: 'black',
    fontFamily: `'Degular', 'Times New Roman', serif`,
    lineHeight: '32px',
    "@media (max-width: 599px)": {
      fontSize: '22px',
      lineHeight: '22px',
      paddingLeft: '10px',
    },
    "@media (min-width: 960px) and (max-width: 1279px)": {
      fontSize: '20px',
      lineHeight: '20px',
      paddingLeft: '10px',
    },
  },
  textRight: {
    textAlign: 'right',
  },
  widgetFooter: {
    textAlign: 'center',
    "& button": {
      margin: "0 10px",
    },
  },
};

export default twitterWidgetStyle;
