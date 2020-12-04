import React from 'react';
import MainCard from '../MainCard.component'
import SubCard from '../SubCard.component'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    title: {
        marginBottom: theme.spacing(3),
    },
}));

const MorePosts = () => {
    const classes = useStyles()

    return (
        <div>
            <Typography className={classes.title} variant="h5">
                More
            </Typography>
            <Grid container>
                <Grid spacing={3} justify='space-between' direction='column' alignContent='center' item container md={6} sm={12}>
                    <Grid item>
                        <SubCard item />
                    </Grid>
                    <Grid item>
                        <SubCard item />
                    </Grid>
                    <Grid item>
                        <SubCard item />
                    </Grid>
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

export default MorePosts;