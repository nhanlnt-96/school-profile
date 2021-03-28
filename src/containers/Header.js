import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { Chip, Typography } from '@material-ui/core';
import FaceIcon from '@material-ui/icons/Face';
import logo from '../assets/logo.png'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    margin: 10,
  },
  menuLeft: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    textAlign: 'center'
  },
  menuLeftContent: {
    width: '50%'
  },
  avatar: {
    margin: 10
  },
  title: {
    fontSize: 20
  },
  image: {
    width: '5%'
  }
}));

export const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <div className={classes.menuLeft}>
            <div className={classes.menuLeftContent}>
              <Typography variant="h6" className={classes.title}>
                TRUNG TÂM NGOẠI NGỮ TÂN VĂN
              </Typography>
              <Typography variant="h6" className={classes.title}>
                BỘ PHẬN NHÂN SỰ
              </Typography>
            </div>
          </div>
          <Button className={classes.menuButton} color="inherit">Trang chủ</Button>
          <Button className={classes.menuButton} color="inherit">Yêu cầu hồ sơ</Button>
          <Button className={classes.menuButton} color="inherit">Theo dõi hồ sơ</Button>
          <Chip className={classes.avatar} label="Jay Le" variant="default" color="default" icon={<FaceIcon/>}/>
        </Toolbar>
      </AppBar>
    </div>
  );
}
