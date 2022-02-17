import React from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { styled } from '@mui/material/styles';
import "./popup.style.scss";

const Transition = React.forwardRef(function Transition(props, ref) {
      return <Slide direction="up" ref={ref} {...props} />;
});

const DefaultButton = styled(Button)(({ theme }) => ({
  color: "#000",
  backgroundColor: "#fff",
  border: "1px solid #000",
  marginRight: 20,
  '&:hover': {
    backgroundColor: "rgba(0,0,0,0.1)",
    border: "1px solid #000",
  },
}));

const Popup = (props) => {
   return (
      <Dialog
        open={props.open}
        TransitionComponent={Transition}
        keepMounted
        onClose={props.handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle className="popup-title">{`Delete ${props.name}?`}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <DefaultButton onClick={props.handleClose} variant="outlined">Cancel</DefaultButton>
            <Button onClick={props.handleConfirmDelete} variant="outlined" color="error">Delete</Button>
          </DialogContentText>
        </DialogContent>
      </Dialog>
   )
}

export default Popup;