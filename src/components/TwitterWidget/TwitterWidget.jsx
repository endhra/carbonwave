import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
// @material-ui/core components
 import { withStyles } from "tss-react/mui";
// core components
import Button from "components/CustomButtons/Button.jsx";
import GridItem from "components/Grid/GridItem.jsx";
// icons
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import twitterWidgetStyle from "assets/jss/material-kit-react/components/twitterWidgetStyle.jsx";

class TwitterWidget extends React.Component {
  constructor(props) {
    super(props);
    this.tweets = props.data.tweets.edges
    this.maxTweetIndex = this.tweets.length-1
    this.twitterProfile = props.data.tweets.edges[0].node.user
    this.twitterProfileURL = `https://twitter.com/${this.twitterProfile.screen_name}/`
    this.twitterAvatarImg = props.adminData.left_side.twitter_avatar
    this.state = {
      currentTweet: this.tweets[0],
      currentTweetIterator: 0 
    };
    this.nextTweet = this.nextTweet.bind(this)
    this.prevTweet = this.prevTweet.bind(this)
    this.createMarkup = this.createMarkup.bind(this)
    this.getUrlsAsLinks = this.getUrlsAsLinks.bind(this)
  }
  
  nextTweet(e) {
    e.target.blur()
    this.setState((state, props) => ({
      currentTweet: props.data.tweets.edges[state.currentTweetIterator+1],
      currentTweetIterator: state.currentTweetIterator+1
    }))
    
  }
  prevTweet(e) {
    e.target.blur()
    this.setState((state, props) => ({
      currentTweet: props.data.tweets.edges[state.currentTweetIterator-1],
      currentTweetIterator: state.currentTweetIterator-1
    }))
    
  }
  getUrlsAsLinks(full_text) {
    var exp = /(\b(((https?|ftp|file|):\/\/)|www[.])[-A-Z0-9+&@#/%?=~_|!:,.;]*[-A-Z0-9+&@#/%=~_|])/ig;
    return full_text.replace(exp,"<a href=\"$1\" target=\"_blank\">$1</a>");
  }
  createDateMarkup() {
    let tweetDate = this.state.currentTweet.node.created_at
    let tweetUrl = `https://twitter.com/${this.twitterProfile.screen_name}/status/${this.state.currentTweet.node.id_str}`
    var date = new Date(tweetDate)
    const hour = new Intl.DateTimeFormat('en', { hour: '2-digit', minute: '2-digit' }).format(date)
    const month = new Intl.DateTimeFormat('en', { month: 'short', day: 'numeric' }).format(date)
    const year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date)
    return {__html: `<a href="${tweetUrl}" target="_blank">${month}, ${year}, ${hour}</a>`}
  }
  createMarkup() {
    let full_text = this.state.currentTweet.node.full_text
    return {__html: this.getUrlsAsLinks(full_text)}
  }
  render(){
    const {
      classes,
    } = this.props;
    return (
      <div className={classes.widgetWrapper}>
        <GridItem xs={8} sm={8} md={8} lg={9} className={classes.widgetItem}>
          <div className={classes.widgetProfilePhoto}>
            <img src={this.twitterAvatarImg} alt='twitter avatar'/>
          </div> 
          <a
            href={this.twitterProfileURL}
            className={classes.widgetProfileName}
            target="_blank"
            rel="noopener noreferrer">
            {`@${this.twitterProfile.name}`}
          </a>   
        </GridItem>
        <GridItem xs={4} sm={4} md={4} lg={3} className={classes.textRight}>
          <Button size="sm" color="secondary" href={this.twitterProfileURL} round>
            Follow
          </Button>
        </GridItem>
        <GridItem xs={12} sm={12} md={12}>
          <div key={this.state.currentTweet.node.id}>
            <p dangerouslySetInnerHTML={this.createMarkup()}/>
            <p dangerouslySetInnerHTML={this.createDateMarkup()}/>
          </div>
        </GridItem>
        <GridItem xs={12} sm={12} md={12} className={classes.widgetFooter}>
          <div>
            {this.state.currentTweetIterator > 0 ? 
              <Button size="lg" color="primary" onClick={this.prevTweet}>
                <FontAwesomeIcon icon={faChevronLeft} fixedWidth />
              </Button> : null}
            {this.state.currentTweetIterator < this.maxTweetIndex ? 
              <Button size="lg" color="primary" onClick={this.nextTweet}>
                <FontAwesomeIcon icon={faChevronRight} fixedWidth />
              </Button> : null}
          </div>
        </GridItem>
      </div>
    )
  }
}

const TwitterQuery = props => (
  <StaticQuery
    query={graphql`
      query TwitterQuery {
        tweets: allTwitterStatusesUserTimelineCCombinatorTimeline {
          edges {
            node {
              full_text
              created_at
              id
              id_str
              user {
                profile_image_url_https
                url
                screen_name
                name
              }
              retweeted
              entities {
                user_mentions {
                  screen_name
                }
              }
            }
          }
        }
      }`
    }
    render={data => <TwitterWidget data={data} {...props} />}
  />
)
export default withStyles(TwitterQuery, twitterWidgetStyle)