import React from 'react';
import logoHorizontal from '../assets/logo-horizontal.png';
import {Button, FormControl, InputLabel, MenuItem, Select, TextField} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

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

const RegisterPage = () => {
    const classes = useStyles();
    return (
        <div className="register-page">
            <div className="register__header">
                <img src={logoHorizontal} alt="logo"/>
            </div>
            <div className="register__form">
                <h1>ĐĂNG KÝ</h1>
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField required label="Họ và tên" variant="outlined"/>
                    <FormControl required variant="outlined" className={classes.formControl}>
                        <InputLabel id="demo-simple-select-outlined-label">Giới tính</InputLabel>
                        <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            // value={}
                            // onChange={handleChange}
                            label="Giới tính"
                        >
                            <MenuItem value="">
                                <em>-Chọn-</em>
                            </MenuItem>
                            <MenuItem value={0}>Nam</MenuItem>
                            <MenuItem value={1}>Nữ</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField required label="Tên đăng nhập" variant="outlined"/>
                    <TextField required label="Mật khẩu" variant="outlined" type="password"/>
                    <Button variant="contained" color="primary">ĐĂNG KÝ</Button>
                </form>
                <div className="register__footer">
                    <p>Bạn đã có tài khoản ? Đăng nhập</p>
                </div>
            </div>
        </div>
    );
}

export default RegisterPage;