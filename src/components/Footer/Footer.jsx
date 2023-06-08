import React from "react";
import fetch from 'isomorphic-unfetch';
import { Link } from "gatsby"
// nodejs library to set properties for components
 import { withStyles } from "tss-react/mui";
import TextField from "@mui/material/TextField";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import logo from "./../../assets/img/footer-logo.png"
import camplightLogo from "./../../assets/img/cl-logo.png"
// icons
import { faLinkedin, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import footerStyle from "assets/jss/material-kit-react/components/footerStyle.jsx";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      result: false,
      error: false,
      email: '',
      pathname: '/'
    };
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    this.setState({ pathname: window.location.pathname})
  }
  handleEmailChange(event) { this.setState({ email: event.target.value })};

  handleSubmit = async (e) => {
    if (e) e.preventDefault();

    this.setState({ loading: true });
    const { email } = this.state;

    fetch('/.netlify/functions/subscribe', {
      method: 'post',
      body: JSON.stringify({
        emailAddress: email,
        subscriptionId: '12139654',
        legalBasis: 'LEGITIMATE_INTEREST_PQL'
      }),
    })
    .then(async (res) => {
      let result = await res.json()
      if (result.success) {
        this.setState({
          loading: false,
          result: true,
          error: false,
          email: '',
        });
      } else {
        this.setState({
          result: true,
          error: result.error,
          loading: false
        });
      }
    })
    .catch(err => {
      this.setState({
        result: true,
        error: "Oops! Something went wrong - we couldn't subscribe you.",
        loading: false
      });
    })
  }

  render() {
    const { classes, menuData, footerData } = this.props
    const { loading, result, error } = this.state;
    const curLang = this.state.pathname.charAt(3) === '/' ? 'es' : 'en'
    return (
      <footer className={classes.footerContainer}>
        <div className={classes.container}>
          <GridContainer justifyContent="center" className={classes.mobileCenter}>
            <GridItem xs={12} sm={10} md={4} lg={6}>
              <Link to={curLang ==='en' ? '/#top' : '/es/#top'}>
                <img className={classes.logo} src={logo} alt='logo'/>
              </Link>
            </GridItem>
            <GridItem xs={12} sm={10} md={3} lg={2}>
              <List disablePadding={true} className={classes.list}>
                <ListItem className={classes.listItem}>
                  <Link to={curLang === 'en' ? '/' : '/es/'}>
                    <h4>
                      {curLang ==='en' ? menuData.home.en_label : menuData.home.es_label}
                    </h4>
                  </Link>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <Link to={curLang === 'en' ? '/what-we-do/' : '/es/what-we-do/'}>
                    <h4>
                      {curLang === 'en' ? menuData.what_we_do.en_label : menuData.what_we_do.es_label}
                    </h4>
                  </Link>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <Link to={curLang === 'en' ? '/team' : '/es/team'}>
                    <h4>
                      {curLang === 'en' ? menuData.team.en_label : menuData.team.es_label}
                    </h4>
                  </Link>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <Link to={curLang === 'en' ? '/blog' : '/es/blog'}>
                    <h4>
                      {curLang === 'en' ? menuData.blog.en_label : menuData.blog.es_label}
                    </h4>
                  </Link>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <Link to={curLang === 'en' ? '/contact' : '/es/contact'}>
                    <h4>
                      {curLang === 'en' ? menuData.contact.en_label : menuData.contact.es_label}
                    </h4>
                  </Link>
                </ListItem>
              </List>
            </GridItem>
            <GridItem xs={12} sm={10} md={5} lg={4} className={classes.list}>
              <div className={classes.mobileOrder2}>
                <h4>{curLang === 'en' ? footerData.en_subscribe_label : footerData.es_subscribe_label}</h4>
                <div>{curLang === 'en' ? footerData.en_subscribe_desc : footerData.es_subscribe_desc}</div>
                <form
                  disabled={loading}
                  onSubmit={this.handleSubmit}
                  className={classes.inlineForm}
                >
                  <TextField
                    className={classes.inlineInput}
                    variant="outlined"
                    label="Email"
                    id="email"
                    value={this.state.email}
                    onChange={this.handleEmailChange}
                    required={true}
                    type="email"
                  />
                  <Button size="sm" color="primary" type="submit" className={classes.inlineButton} solid>
                    {curLang === 'en' ? footerData.en_join : footerData.es_join}
                  </Button>
                </form>
                { loading ? 
                  <span>Loading...</span>
                : null}
                { !loading && result ? 
                  <div>
                    { !error
                      ? <span className={classes.success}>Success, you have been subscribed!</span>
                      : <span className={classes.warning}>{error}</span>
                    }
                  </div>
                : null}
              </div>
              <div className={`${classes.socialMedias} ${classes.mobileOrder1}`}>
                <a href={footerData.linkedin_url} target="_blank" rel="noopener noreferrer" className={classes.socialMediaLink}>
                  <FontAwesomeIcon icon={faLinkedin} fixedWidth />
                </a>
                <a href={footerData.twitter_url} target="_blank" rel="noopener noreferrer" className={classes.socialMediaLink}>
                  <FontAwesomeIcon icon={faTwitter} fixedWidth />
                </a>
                <a href={footerData.instagram_url} target="_blank" rel="noopener noreferrer" className={classes.socialMediaLink}>
                  <FontAwesomeIcon icon={faInstagram} fixedWidth />
                </a>
              </div>
            </GridItem>
            <GridItem xs={12} sm={10} md={12} className={classes.spaceBetween}>
              <span className={classes.footerText}>&copy; {1900 + new Date().getYear()} {footerData.footer_text}</span>
              <span style={{fontsize: "13px", lineHeight: "20px"}}>Made with <img src={camplightLogo} alt='camplight-logo' style={{verticalAlign: "top", height: "20px", margin: "0 2px"}} /> by <a href="https://camplight.net" target="_blank" rel="noopener noreferrer" style={{color: "#000"}}>Camplight</a> cooperative</span>
            </GridItem>
          </GridContainer>
        </div>
      </footer>
    );
  }
}

export default withStyles(Footer, footerStyle);
