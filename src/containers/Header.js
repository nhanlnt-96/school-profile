import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {Chip} from '@material-ui/core';
import FaceIcon from '@material-ui/icons/Face';
import logo from '../assets/logo.png'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuLeft: {
        flexGrow: 1
    },
    menuLeftContent: {
        width: '50%'
    },
    avatar: {
        margin: 10
    },
    title: {
        fontSize: 20
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
                            <img className={classes.image} src={logo} alt="logon.png"/>
                        </div>
                    </div>
                    <Chip className={classes.avatar} label="Jay Le" variant="default" color="default"
                          icon={<FaceIcon/>}/>
                </Toolbar>
            </AppBar>
        </div>
    );
}
