import React from 'react';
import logoHorizontal from '../assets/logo-horizontal.png';
import { Button, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(2),
      width: 300
    },
  },
}));

export const LoginPage = () => {
  const classes = useStyles();
  return (
    <div className="login-page">
      <div className="login__header">
        <img src={logoHorizontal} alt="logo"/>
      </div>
      <div className="login__form">
        <h1>ĐĂNG NHẬP</h1>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField required label="Tên đăng nhập" variant="outlined"/>
          <TextField required label="Mật khẩu" variant="outlined" type="password"/>
          <Button variant="contained" color="primary">ĐĂNG NHẬP</Button>
        </form>
        <div className="login__footer">
          <p>Bạn chưa có tài khoản ?</p>
          <Button variant="outlined">ĐĂNG KÝ</Button>
        </div>
      </div>
    </div>
  );
}