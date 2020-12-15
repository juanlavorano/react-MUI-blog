import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import API from '../api'
import DividerLine from '../Divider.component'
import SubCard from '../MainPage/SubCard.component'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { useAuth } from '../../context/AuthContext'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    container: {
        padding: theme.spacing(3),
        height: '100%',
    },
    buttons: {
        paddingTop: theme.spacing(1),
    },
    button: {
        textDecoration: 'none',
        margin: theme.spacing(1)
    }
}));

export default function Profile() {
    const classes = useStyles()
    const history = useHistory()
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const { currentUser } = useAuth()

    useEffect(async () => {
        try {
            const user = await currentUser.email
            const response = await API.get(`/posts/${user}/all`)
            const { data } = response
            setPosts(data)
            setLoading(false)
        } catch (error) {
            console.log(error)
        }
    }, [])

    function renderPosts() {
        const postList = [];
        const user = currentUser.email
        for (let i = 0; i < posts.length; i++) {
            let post = posts[i]
            let postId = posts[i]._id
            postList.push(
                <Grid item>
                    <SubCard post={post} item />
                    {user === posts[i].author ?
                        <div className={classes.buttons}>
                            <Button onClick={() => {
                                history.push(`/edit/${postId}`)
                            }} variant="contained" color="info">
                                Edit
                            </Button>
                            <Button onClick={async () => {
                                await API.delete(`/posts/delete/${postId}`, { data: { id: postId } })
                                    .then(() => window.location.reload())
                            }} className={classes.button} variant="contained" color="error">
                                Delete
                            </Button>
                        </div>
                        :
                        <h1>Loading</h1>
                    }
                </Grid>);
        }
        return postList;
    }
    return (
        <div >
            {!loading
                ?
                < Container className={classes.container} maxWidth="md">
                    <h1>User: {currentUser.email}</h1>
                    <DividerLine />
                    <h1>My Posts</h1>
                    <Grid spacing={3} justify='space-between' direction='column' alignContent='center' item container>
                        {renderPosts()}
                    </Grid>
                </Container>
                :
                <h1>Loading...</h1>
            }
        </div>
    );
};