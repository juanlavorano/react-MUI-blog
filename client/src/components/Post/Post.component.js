import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import nl2br from 'react-nl2br'

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        padding: theme.spacing(3),
        height: '100%',
    },
}));

export default function Post() {
    const classes = useStyles();
    const [post, setPost] = useState({})
    const [loading, setLoading] = useState(true)
    const { id } = useParams()

    useEffect(async () => {
        const response = await axios.get(`http://localhost:5000/posts/user/${id}`)
        setPost(response.data)
        setLoading(false)
    }, [])

    return (
        <div>
            {!loading
                ?
                <Container className={classes.container} maxWidth="md">
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <h1>{post.title}</h1>
                                </Grid>
                                <Grid item xs={12}>
                                    {nl2br(post.content)}
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
                :
                <h1>Loading</h1>
            }
        </div >
    )
}
