import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import ButtonBase from '@material-ui/core/ButtonBase'
import ReadMore from './ReadMore.component'
import square from '../../assets/square.jpg'
import Loading from '../Loading.component'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        height: '100%',
    },
    paper: {
        minWidth: 500,
        overflow: 'hidden',
        padding: 0
    },
    grid: {
        padding: 0
    },
    margin: {
        margin: '10px',
        padding: 0
    },
    image: {
        width: 128,
        height: 128,
    },
    img: {
        display: 'block',
        maxWidth: '100%',
        height: '100%',
    },
    text: {
        color: '#000'
    }
}));

export default function SubCard({ post }) {
    const classes = useStyles();


    return (

        <div className={classes.root}>
            {post ?

                < Container fixed className={classes.paper}>
                    <Grid container>
                        <Grid className={classes.grid} item>
                            <ButtonBase className={classes.image}>
                                <img className={classes.img} alt="complex" src={square} />
                            </ButtonBase>
                        </Grid>
                        <Grid item xs={12} sm container className={classes.margin}>
                            <Grid item xs container direction="column">
                                <Grid item xs>
                                    <Typography gutterBottom variant="subtitle1">
                                        {post.title}
                                    </Typography>
                                    <Typography variant="body2" gutterBottom>
                                        {post.content}
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="body2">
                                        <ReadMore route={post._id} className={classes.text} />
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
                :
                <Loading />
            }
        </div>
    );
}
