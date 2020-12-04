import React from 'react';
import MainCard from '../MainCard.component'
import SubCard from '../SubCard.component'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    title: {
        marginBottom: theme.spacing(3),
        marginTop: theme.spacing(3)
    },
}));

const LatestPosts = () => {
    const classes = useStyles()
    return (
        <div>
            <Typography className={classes.title} spacing={2} variant="h5">
                Latest Posts
                </Typography>
            <Grid container spacing={2}>
                <Grid item md={6} sm={12}>
                    <MainCard />
                </Grid>
                <Grid spacing={2} justify='space-between' direction='column' alignContent='center' item container md={6} sm={12}>
                    <Grid item>
                        <SubCard item />
                    </Grid>
                    <Grid item>
                        <SubCard item />
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default LatestPosts;