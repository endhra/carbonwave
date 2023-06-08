import React from "react";
import { Link } from "gatsby"
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
 import { withStyles } from "tss-react/mui";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
// icons
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// core components
import headerStyle from "assets/jss/material-kit-react/components/headerStyle.jsx";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileOpen: false,
      scrolled: false,
    };
    this.handleDrawerToggle = this.handleDrawerToggle.bind(this);
    this.headerColorChange = this.headerColorChange.bind(this);
    this.pathname = '/'
  }
  handleDrawerToggle() {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  }
  
  componentDidMount() {
    if (this.props.changeColorOnScroll) {
      window.addEventListener("scroll", this.headerColorChange);
    }
    this.pathname = window.location.pathname
  }
  headerColorChange() {
    const { changeColorOnScroll } = this.props;
    const windowsScrollTop = typeof window !== 'undefined' && window.pageYOffset;

    if (windowsScrollTop > changeColorOnScroll.height) {
        this.setState({ scrolled: true });
    } else {
        this.setState({ scrolled: false });
    }
  }
  componentWillUnmount() {
    if (this.props.changeColorOnScroll) {
      typeof window !== 'undefined' && window.removeEventListener("scroll", this.headerColorChange);
    }
  }
  render() {
    const {
      classes,
      rightLinks,
      brandLogo,
      mobileMenuImage,
    } = this.props;
    const scrolled = this.state.scrolled;
    const curLang = this.pathname.charAt(3) ==='/' ? 'es' : 'en'
    
    return (
      <AppBar
        className={scrolled ? `${classes.fixed} ${classes.navScrolled}` : `${classes.fixed}`}
        elevation={0}
      >
        <Toolbar className={scrolled ? `${classes.container} ${classes.navSmall}` : `${classes.container}`}>
          <div className={classes.title}>
            <Link to={curLang === 'en' ? '/#top' : '/es/#top'} color="transparent">
              <img className={scrolled ? `${classes.headerLogo} ${classes.headerLogoScrolled}` : `${classes.headerLogo}`} src={brandLogo} alt='logo' id='brand-logo'/>
            </Link>
          </div>
          <Box sx={{ display: { xs: 'none', md: 'block' } }} >
            {rightLinks}
          </Box>
          <Box sx={{ display: { xs: 'block', md: 'none' } }} >
            <IconButton
              aria-label="open drawer"
              onClick={this.handleDrawerToggle}
            >
              <FontAwesomeIcon icon={faBars} fixedWidth transform="shrink-4" />
            </IconButton>
            </Box>
        </Toolbar>
        <Box sx={{ display: { xs: 'block', md: 'none' } }} >
          <Drawer
            variant="temporary"
            anchor={"right"}
            open={this.state.mobileOpen}
            classes={{
              paper: classes.drawerPaper
            }}
            onClose={this.handleDrawerToggle}
          >
            <div className={classes.modalMenuWrapper}>
              <div className={classes.bgImage} style={{ backgroundImage: `url("${mobileMenuImage}")` }}></div>
              <div className={classes.modalCloseButton}>
                <IconButton
                  className={classes.modalCloseButton}
                  key="close"
                  aria-label="Close"
                  color="inherit"
                  onClick={this.handleDrawerToggle}
                >
                  <FontAwesomeIcon icon={faTimes} fixedWidth transform="shrink-2" />
                </IconButton>
              </div>
              <div className={classes.modalItemsWrapper}>
                {rightLinks}
              </div>
            </div>
          </Drawer>
        </Box>
      </AppBar>
    );
  }
}

Header.defaultProp = {
  color: "white"
};

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  color: PropTypes.oneOf([
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "transparent",
    "white",
    "rose",
    "dark"
  ]),
  rightLinks: PropTypes.node,
  brandLogo: PropTypes.string,
  fixed: PropTypes.bool,
  absolute: PropTypes.bool,
  // this will cause the sidebar to change the color from
  // this.props.color (see above) to changeColorOnScroll.color
  // when the window.pageYOffset is heigher or equal to
  // changeColorOnScroll.height and then when it is smaller than
  // changeColorOnScroll.height change it back to
  // this.props.color (see above)
  changeColorOnScroll: PropTypes.shape({
    height: PropTypes.number.isRequired,
    color: PropTypes.oneOf([
      "primary",
      "info",
      "success",
      "warning",
      "danger",
      "transparent",
      "white",
      "rose",
      "dark"
    ]).isRequired
  })
};

export default withStyles(Header, headerStyle);
