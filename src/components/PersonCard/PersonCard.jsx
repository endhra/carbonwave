import React, { useState } from "react";
// @material-ui/core components
 import { withStyles } from "tss-react/mui";
import GridItem from "components/Grid/GridItem.jsx";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
// icons
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import personCardStyle from "assets/jss/material-kit-react/components/personCardStyle.jsx";

function PersonCard({ name, photo, popup_photo, role, bio, ...props }) {
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);
  const [modal, setModal] = useState(false);
  const { classes } = props;
  return (
    <GridItem xs={6} sm={6} md={4} lg={3} className={classes.marginBottom70}>
      {/* eslint-disable-next-line */}
      <div
        role="button"
        onClick={() => setModal(true)}
        className={hovered ? `${classes.personCardWrapperHovered} ${classes.personCardWrapper}` : `${classes.personCardWrapper}`}
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
      >
        <div
          className={classes.personAvatar}
          style={{backgroundImage: `url("${photo}")`, opacity: hovered ? '0.6' : '1', transition: '0.3s'}}
        ></div>
        <h4 className={classes.personTitle} style={{opacity: hovered ? '0.6' : '1', transition: '0.3s'}}>{name}</h4>
        <p className={`${classes.margin0} ${classes.personRole}`} style={{opacity: hovered ? '0.6' : '1', transition: '0.3s'}}>{role}</p>
      </div>
      <Dialog 
        classes={{
          paper: classes.modalWrapper,
        }}
        PaperProps={{
          square: true
        }}
        open={modal}
        keepMounted
        maxWidth="lg"
        fullWidth
        onClose={() => setModal(false)}
        aria-labelledby="modal-slide-title"
        aria-describedby="modal-slide-description"
      >
        <div className={classes.modalContentWrapper}>
          <div className={classes.modalPhoto} style={{backgroundImage: `url("${popup_photo}")`}}></div>
          {/* <img className={classes.modalPhoto} src={popup_photo} alt='member-image'/> */}
          <div className={classes.modalContent}>
            <DialogTitle
              id="classic-modal-slide-title"
              disableTypography
              className={classes.modalTitleWrapper}
            >
              <h3 className={classes.modalTitle}>{name}</h3>
              <p className={classes.modalRole}>{role}</p>
            </DialogTitle>
            <DialogContent
              id="modal-slide-description"
              className={classes.modalBody}
            >
              <ul className={classes.modalList}>
                {bio ? bio.map((row, i) => {
                  if(row.row!==" "){
                    return (<li key={i} className={classes.modalListItem}>{row.row}</li>)
                  }else{
                    return null
                  }
                }
                ) : null}
              </ul>
            </DialogContent>
          </div>
        </div>
        <IconButton
          className={classes.modalCloseButton}
          key="close"
          aria-label="Close"
          color="inherit"
          onClick={() => setModal(false)}
        >
          <FontAwesomeIcon icon={faTimes} fixedWidth transform="shrink-2" />
        </IconButton>
      </Dialog>
    </GridItem>
  );
}

export default withStyles(PersonCard, personCardStyle);
