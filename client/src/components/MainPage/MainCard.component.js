import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import ButtonBase from '@material-ui/core/ButtonBase'
import pic from '../../assets/pic.jpg'
import ReadMore from './ReadMore.component'

const useStyles = makeStyles((theme) => ({
    paper: {
        margin: 'auto',
        maxWidth: '100%',
        height: '100%',
        zIndex: '1000',
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: '100%',
        margin: 0,
    },
    img: {
        width: '100%',
        height: '100%',
    },
    textBox: {
        width: '100%',
        height: '140px',
        marginBottom: '-150px',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        zIndex: '1100',
        position: 'relative',
        bottom: '20vh',
        padding: '1rem',
        overflow: 'scroll'
    },
    text: {
        color: '#fff',
        maxLength: '3',

    },

}));

export default function MainCard() {
    const classes = useStyles();

    return (
        <div>
            <Container variant="outlined" elevation={0} className={classes.paper}>
                <Grid container className={classes.container}>
                    <Grid item>
                        <ButtonBase className={classes.image}>
                            <img className={classes.img} alt="complex" src={pic} />
                        </ButtonBase>
                    </Grid>
                    <Grid className={classes.textBox}>
                        <Typography variant="h5" className={classes.text}>
                            Title
                        </Typography>
                        <Typography display='inline' variant="body2" className={classes.text}>
                            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. <ReadMore />
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </div >
    );
}