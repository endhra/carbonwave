import React from "react"

import { withStyles } from "tss-react/mui"

// core components
import AnimateIn from "components/AnimateIn/AnimateIn.jsx"
import GridContainer from "components/Grid/GridContainer.jsx"
import GridItem from "components/Grid/GridItem.jsx"
import PersonCard from "components/PersonCard/PersonCard.jsx"

import generalViewStyle from "assets/jss/material-kit-react/views/generalViewStyle.jsx";

class TeamSection extends React.Component {

  render() {
    const { classes } = this.props
    let data
    let teamMemberAlphabetically
    if (this.props.data) {
      data = this.props.data
      teamMemberAlphabetically = this.props.data.team_members.sort((a, b) => a.name.localeCompare(b.name))
    } else return null
    return (
      <div
        className={`${classes.container} ${classes.marginTop200} ${classes.marginBottom40}`}
        id="team"
      >
        <GridContainer justifyContent="center">
          <GridItem xs={12} sm={12} md={12} className={classes.marginBottom80}>
            <AnimateIn type="slide">
              <h1 className={classes.title}>{data.heading}</h1>
            </AnimateIn>
          </GridItem>
          {teamMemberAlphabetically.map((member, i) => (
            <PersonCard
              key={i}
              photo={member.photo}
              popup_photo={member.popup_photo}
              name={member.name}
              role={member.role}
              bio={member.bio}
            />
          ))}
        </GridContainer>
      </div>
    )
  }
}

export default withStyles(TeamSection, generalViewStyle)
