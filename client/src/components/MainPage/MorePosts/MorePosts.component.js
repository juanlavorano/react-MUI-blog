import React, { useEffect, useState } from 'react';
import axios from 'axios'
import SubCard from '../SubCard.component'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import Loading from '../../Loading.component'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    title: {
        marginBottom: theme.spacing(3),
    },
}));

const MorePosts = () => {
    const classes = useStyles()
    const [loading, setLoading] = useState(true)
    const [posts, setPosts] = useState(true)

    useEffect(async () => {
        try {
            const response = await axios.get('http://localhost:5000/posts/all')
            const { data } = response
            setPosts(data)
            setLoading(false)
        } catch (error) {
            console.log(error)
        }
    }, [])

    function renderPosts() {
        const postList = [];
        for (let i = 0; i < posts.length; i++) {
            let post = posts[i]
            postList.push(
                <Grid item>
                    <SubCard post={post} item />
                </Grid>);
        }

        return postList;
    }

    return (
        <div>
            <Typography className={classes.title} variant="h5">
                More
            </Typography>
            {loading === false
                ?
                <div>
                    <Grid container>
                        <Grid spacing={3} justify='space-between' direction='column' alignContent='center' item container md={6} sm={12}>
                            {renderPosts()}
                        </Grid>
                    </Grid>
                </div>
                :
                <Loading />
            }
        </div >
    )
}

export default MorePosts;