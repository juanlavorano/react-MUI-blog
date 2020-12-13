import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import ButtonBase from '@material-ui/core/ButtonBase'
import pic from '../../assets/pic.jpg'
import ReadMore from './ReadMore.component'
import Loading from '../Loading.component'

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
        textAlign: 'justify'

    },

}));

export default function MainCard({ post }) {
    const classes = useStyles();
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (post) {
            setLoading(false)
        }
    })

    return (
        <div>
            {!loading ?
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
                                    {post.title}
                                </Typography>
                                <Typography display='inline' variant="body2" className={classes.text}>
                                    {(post.content).slice(0, 230)}<ReadMore route={post._id} />
                                </Typography>
                            </Grid>
                        </Grid>
                    </Container>
                </div>
                :
                <Loading />
            }
        </div>
    );
}
