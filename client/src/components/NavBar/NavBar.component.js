import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import DividerLine from '../Divider.component'
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { useHistory } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

    root: {
        flexGrow: 1,
    },

    title: {
        flexGrow: 1,
        fontFamily: theme.typography.fontFamily['Montserrat']
    },
    link: {
        color: '#000',
        textDecoration: 'none'
    },
    toggleMenu: {
        display: 'flex',
        zIndex: '7000'
    }
}));

export default function NavBar() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null)
    const [error, setError] = useState('')
    const open = Boolean(anchorEl)
    const { currentUser, logOut } = useAuth()
    const history = useHistory()

    //TOGGLE MENU FUNCTIONS
    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogOut = () => {
        setAnchorEl(null);
        try {
            logOut();
            history.push('/')
        } catch {
            setError('Failed to log out')
        }
    }
    let menu
    if (currentUser) {
        menu =
            <div className={classes.toggleMenu}>
                <MenuItem><Link to='/posts/create' className={classes.link}>Create Post</Link></MenuItem>
                <IconButton
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color="success"
                >
                    <AccountCircle />
                </IconButton>
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={open}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleLogOut}>Log out</MenuItem>
                </Menu>
            </div>
    } else {
        menu = <div>
            <Link align='left' className={classes.link} to='/login'><Button variant='h6' >Login</Button></Link>
            <Link align='left' className={classes.link} to='/register'><Button variant='h6'>Sign Up</Button></Link>
        </div>
    }

    return (
        <div className={classes.root}>
            <Container mx='auto' p={4} width='80%' height='100%'>
                <AppBar color='primary' elevation={0} position="static">
                    <Toolbar>
                        <Link align='right' className={classes.link} to='/'><Button variant='h6' >Home</Button></Link>
                        <Typography align='center' variant='h5' className={classes.title}>
                            Blog
                        </Typography>
                        <div>
                            {menu}
                        </div>
                    </Toolbar>
                </AppBar>
                <DividerLine />
            </Container>
        </div>
    );
}
