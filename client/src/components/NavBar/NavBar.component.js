import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import DividerLine from '../Divider.component'
import { Link } from "react-router-dom";
import { useTheme } from '@material-ui/core/styles';

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
    }
}));

export default function NavBar() {
    const theme = useTheme()
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Container mx='auto' p={4} width='80%' height='100%'>
                <AppBar color='primary' elevation={0} position="static">
                    <Toolbar>
                        <Link align='right' className={classes.link} to='/'><Button variant='h6' >Home</Button></Link>
                        <Typography align='center' variant='h5' className={classes.title}>
                            Blog
                        </Typography>
                        <Link align='left' className={classes.link} to='/login'><Button variant='h6' >Login</Button></Link>
                        <Link align='left' className={classes.link} to='/register'><Button variant='h6'>Register</Button></Link>
                    </Toolbar>
                </AppBar>
                <DividerLine />
            </Container>
        </div>
    );
}
