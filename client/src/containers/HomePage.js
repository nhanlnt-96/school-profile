import React from "react";
import { withRouter } from "react-router-dom";
import { Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

import ProfileStatus from "./ProfileStatus";
import ProfileRequest from "./ProfileRequest";

const HomePage = () => {
  const useStyles = makeStyles((theme) => ({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="home-page">
      <div className="homepage__header">
        <TextField
          required
          style={{ width: "50%", marginRight: "20px" }}
          size="small"
          label="Nhập tên trường"
          variant="outlined"
        />
        <Button
          style={{ width: "15%", marginRight: "20px" }}
          variant="contained"
          color="primary"
        >
          TÌM KIẾM
        </Button>
        <Button
          style={{ width: "10%" }}
          variant="contained"
          color="primary"
          onClick={handleOpen}
        >
          THÊM HỒ SƠ
        </Button>
      </div>
      <div className="profile-status">
        <ProfileStatus />
      </div>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <ProfileRequest />
        </Fade>
      </Modal>
    </div>
  );
};

export default withRouter(HomePage);
