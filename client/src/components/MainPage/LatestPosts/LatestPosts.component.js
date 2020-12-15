import React, { useState, useEffect } from 'react';
import API from '../../api'
import MainCard from '../MainCard.component'
import SubCard from '../SubCard.component'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import Loading from '../../Loading.component'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    title: {
        marginBottom: theme.spacing(3),
        marginTop: theme.spacing(3)
    },
}));

const LatestPosts = () => {
    const classes = useStyles()
    const [lastPost, setLastPost] = useState(undefined)
    const [otherPosts, setOtherPosts] = useState(undefined)

    useEffect(async () => {
        try {
            const response = await API.get('/posts/get-latest-posts')
            const [main, other] = await response.data
            setLastPost(main[0])
            setOtherPosts(other)
            // setLoading(false)
        } catch (error) {
            console.log(error)
        }
    }, [])


    return (
        <div>
            <Typography className={classes.title} spacing={2} variant="h5">
                Latest Posts
                </Typography>
            <Grid container spacing={2}>
                <Grid item md={6} sm={12}>
                    <MainCard post={lastPost} />
                </Grid>
                {otherPosts ?
                    <Grid spacing={2} justify='space-between' direction='column' alignContent='center' item container md={6} sm={12}>
                        <Grid item>
                            <SubCard post={otherPosts[0]} item />
                        </Grid>

                        <Grid item>
                            <SubCard post={otherPosts[1]} item />
                        </Grid>
                    </Grid>
                    :
                    <Loading />
                }
            </Grid>
        </div>
    )
}

export default LatestPosts;