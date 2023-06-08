import React from "react";
import Cookies from 'js-cookie';
import PropTypes from 'prop-types';
import { navigate } from 'gatsby';
 import { withStyles } from "tss-react/mui";
import selectLanguageStyle from "assets/jss/material-kit-react/components/selectLanguageStyle.jsx";

const SelectLanguage = (props) => {
  const { classes, curLang, pathname } = props
  
  
  const onClick = (link) => {
    Cookies.set('language-selected', true);
    return navigate(link)
  }
  const getLink = (lang) => {
    if (lang === 'en') {
      if (pathname.charAt(3)=== '/') {
        return pathname.substring(3)
      } else {
        return pathname
      }
    } else {
      if (pathname.charAt(3) === '/') {
        return '/' + lang + pathname.substring(3)
      } else {
        return '/' + lang + pathname
      }
    }
  }
  
  const links = props.langs.map(( langKey ) => (
    <li key={langKey} className={classes.selectLanguageListItem}>
      <div onClick={() => onClick(getLink(langKey))} role="link" tabIndex="0" className={langKey === curLang ? `${classes.selectLanguageListLink} ${classes.langActive}` : classes.selectLanguageListLink} onKeyUp={() => onClick(getLink(langKey))}>
        {langKey}
      </div>
    </li>
  ));

  return (
    <ul className={classes.selectLanguageList}>{links}</ul>
  );
};


SelectLanguage.propTypes = {
  langs: PropTypes.array,
};

export default withStyles(SelectLanguage, selectLanguageStyle)
