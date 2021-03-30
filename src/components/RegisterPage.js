import React, { useState } from 'react';
import logoHorizontal from '../assets/logo-horizontal.png';
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(2),
      width: 300
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  }
}));

const RegisterPage = ({history}) => {
  const [fullname, setFullname] = useState('');
  const [gender, setGender] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const classes = useStyles();

  const onRegisterBtnClick = (fullname, gender, username, password) => {
    console.log(`fullname: ${fullname}`);
    console.log(`gender: ${gender}`);
    console.log(`username: ${username}`);
    console.log(`password: ${password}`);
    history.push('/success');
  }

  return (
    <div className="register-page">
      <div className="register__header">
        <img src={logoHorizontal} alt="logo"/>
      </div>
      <div className="register__form">
        <h1>ĐĂNG KÝ</h1>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            required
            label="Họ và tên"
            variant="outlined"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
          />
          <FormControl required variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">Giới tính</InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              label="Giới tính"
            >
              <MenuItem value="">
                <em>-Chọn-</em>
              </MenuItem>
              <MenuItem value={0}>Nam</MenuItem>
              <MenuItem value={1}>Nữ</MenuItem>
            </Select>
          </FormControl>
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
            color="primary" onClick={() => onRegisterBtnClick(fullname, gender, username, password)}>ĐĂNG KÝ</Button>
        </form>
        <div className="register__footer">
          <p>Bạn đã có tài khoản ? Đăng nhập</p>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;