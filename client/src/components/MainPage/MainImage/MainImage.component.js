import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import ButtonBase from '@material-ui/core/ButtonBase'
import Typography from '@material-ui/core/Typography'
import main from '../../../assets/main.jpg'
import { useTheme } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    image: {
        width: '100%',
        maxHeight: '100vh',
        marginBottom: '30px'
    },
    img: {
        position: 'relative',
        width: '100%',
        maxHeight: '60vh',
        zIndex: '1900'
    },
    text: {
        position: 'absolute',
        left: 'auto',
        top: 'auto',
        zIndex: '3000',
        color: theme.palette.primary.main
    },
    overlay: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        zIndex: '2000',
        backgroundColor: 'rgba(0, 0, 0, 0.4)'
    }
}));

export default function MainImage() {
    const classes = useStyles();
    const theme = useTheme()

    return (
        <div>
            <ButtonBase className={classes.image}>
                <Typography variant='h2' className={classes.text}>Welcome to the <span style={{ color: theme.palette.success.main }}>MUI</span> Blog</Typography>
                <div className={classes.overlay}></div>
                <img className={classes.img} alt="complex" src={main} />
            </ButtonBase>
        </div >
    );
}