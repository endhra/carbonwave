import React, { useState } from "react";
// @material-ui/core components
 import { withStyles } from "tss-react/mui";
import GridItem from "components/Grid/GridItem.jsx";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import Button from "components/CustomButtons/Button.jsx";
import IconButton from "@mui/material/IconButton";
import Slide from "@mui/material/Slide";
// icons
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import popupStyle from "assets/jss/material-kit-react/components/popupStyle.jsx";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function Popup(props) {
  const { classes } = props
  const data = props.data
  const [modal, setModal] = useState(true);
  return (
    <GridItem xs={6} sm={6} md={4} lg={3} className={classes.marginBottom70}>
      <Dialog 
        classes={{
          paper: classes.modalWrapper,
        }}
        PaperProps={{
          square: true
        }}
        BackdropProps={{ 
          style: { backgroundColor: "rgba(3, 59, 60, 0.7)" } 
        }}
        TransitionComponent={Transition}
        open={modal}
        keepMounted
        maxWidth="md"
        onClose={() => setModal(false)}
        aria-labelledby="modal-slide-title"
        aria-describedby="modal-slide-description"
      >
        <div className={classes.modalContent}>
          {data.title &&
            <DialogTitle
            id="classic-modal-slide-title"
            disableTypography
            >
              <h3 className={classes.modalTitle}>{data.title}</h3>
            </DialogTitle>
          }
          {(data.text || (data.button_label && data.button_link)) &&
            <DialogContent
              id="modal-slide-description"
              className={classes.modalBody}
            >
              <p className={classes.modalRole}>{data.text}</p>
              {data.button_label && data.button_link &&
                <Button
                size="sm"
                color="primary"
                href={data.button_link} 
                target="_blank" 
                onClick={() => setModal(false)}
                round
                >
                  {data.button_label}
                </Button>
              }
            </DialogContent>
          }
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

export default withStyles(Popup, popupStyle);
