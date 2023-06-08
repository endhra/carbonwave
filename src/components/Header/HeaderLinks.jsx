/*eslint-disable*/
import React, { useState, useEffect } from "react";
import { Link } from "gatsby"

// @material-ui/core components
import { withStyles } from "tss-react/mui"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import SelectLanguage from "components/SelectLanguage/SelectLanguage.jsx"
import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx"

function HeaderLinks({ ...props }) {
  const { classes } = props
  const { langs } = props
  const { menuData } = props
  let [pathname, setPathname] = useState('/')
  let [curLang, setCurLang] = useState('en'); 
  
  useEffect(() => {
    setPathname(window.location.pathname)
    setCurLang(pathname.charAt(3) === '/' ? 'es' : 'en')
  }, [pathname, curLang])
  return (
    <List className={classes.list} role="menu">
      {menuData.home.show_in_menu && (
        <ListItem className={classes.listItem} role="presentation">
          <Link to={curLang === 'en' ? '/' : '/es/'} className={classes.navLink} activeClassName={classes.navLinkActive}>
            {curLang === 'en' ? menuData.home.en_label : menuData.home.es_label}
          </Link>
        </ListItem>
      )}
      {menuData.what_we_do.show_in_menu && (
        <ListItem className={classes.listItem} role="presentation">
          <Link to={curLang === 'en' ? '/what-we-do/' : '/es/what-we-do/'} className={classes.navLink} activeClassName={classes.navLinkActive}>
            {curLang === 'en' ? menuData.what_we_do.en_label : menuData.what_we_do.es_label}  
          </Link>
        </ListItem>
      )}
      {menuData.sourcing.show_in_menu && (
        <ListItem className={classes.listItem} role="presentation">
          <Link to={curLang === 'en' ? '/sourcing/' : '/es/sourcing/'} className={classes.navLink} activeClassName={classes.navLinkActive}>
            {curLang === 'en' ? menuData.sourcing.en_label : menuData.sourcing.es_label}  
          </Link>
        </ListItem>
      )}
      {menuData.team.show_in_menu && (
        <ListItem className={classes.listItem} role="presentation">
          <Link to={curLang === 'en' ? '/team' : '/es/team'} className={classes.navLink} activeClassName={classes.navLinkActive}>
            {curLang === 'en' ? menuData.team.en_label : menuData.team.es_label}
          </Link>
        </ListItem>
      )}
      {menuData.blog.show_in_menu && (
        <ListItem className={classes.listItem} role="presentation">
          <Link to={curLang === 'en' ? '/blog' : '/es/blog'} className={classes.navLink} activeClassName={classes.navLinkActive} partiallyActive={true}>
            {curLang === 'en' ? menuData.blog.en_label : menuData.blog.es_label}
          </Link>
        </ListItem>
      )}
      {menuData.contact.show_in_menu && (
        <ListItem className={classes.listItem} role="presentation">
          <Link to={curLang ==='en' ? '/contact' : '/es/contact'} className={classes.navLink} activeClassName={classes.navLinkActive}>
            {curLang ==='en' ? menuData.contact.en_label : menuData.contact.es_label}
          </Link>
        </ListItem>
      )}
      <ListItem className={classes.listItem} role="presentation">
        <SelectLanguage langs={langs} curLang={curLang} pathname={pathname}/>
      </ListItem>
    </List>
  )
}

export default withStyles(HeaderLinks, headerLinksStyle)
