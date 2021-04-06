import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
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

const LoginPage = ({history}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userDb, setUserDb] = useState([]);
  const classes = useStyles();

  const onLoginBtnClick = (username, password) => {
    console.log('hello');
  };

  const onRegisterBtnClick = () => {
    history.push('/register');
  }

  return (
    <div className="login-page">
      <div className="login__header">
        <img src={logoHorizontal} alt="logo"/>
      </div>
      <div className="login__form">
        <h1>ĐĂNG NHẬP</h1>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            required
            label="Tên đăng nhập"
            variant="outlined"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            required
            label="Mật khẩu"
            variant="outlined"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={() => onLoginBtnClick(username, password)}>ĐĂNG NHẬP</Button>
        </form>
        <div className="login__footer">
          <p>Bạn chưa có tài khoản ?</p>
          <Button variant="outlined" onClick={onRegisterBtnClick}>ĐĂNG KÝ</Button>
        </div>
      </div>
    </div>
  );
}

export default withRouter(LoginPage);
