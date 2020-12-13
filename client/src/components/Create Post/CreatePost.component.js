import React, { useRef, useState } from 'react'
import axios from 'axios'
import './Form.css'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import { useHistory } from 'react-router-dom'
import { Alert, AlertTitle } from '@material-ui/lab'
import { makeStyles } from '@material-ui/core/styles'
import { useAuth } from '../../context/AuthContext'

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        padding: theme.spacing(3),
        height: '72.5vh',
        justifyContent: 'center'
    }
}));

export default function Register() {
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const [loading, setLoading] = useState(false)
    const { currentUser } = useAuth()
    const titleRef = useRef()
    const [title, setTitle] = useState('')
    const contentRef = useRef()
    const [content, setContent] = useState('')
    const classes = useStyles();
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError('')
            setSuccess('Successfully Posted!')
            setLoading(true)
            await axios.post('http://localhost:5000/posts/create', {
                title: title,
                author: currentUser.email,
                content: content
            })
        } catch {
            setSuccess('')
            setError('Failed to post')
            setLoading(false)
            return { error }
        }
        setLoading(false)
        history.push('/')
    }

    const handleContentChange = (e) => {
        e.preventDefault()
        setContent(e.target.value)
    }
    const handleTitleChange = (e) => {
        e.preventDefault()
        setTitle(e.target.value)
    }

    return (
        <Container className={classes.container} maxWidth="s">
            <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                {error && <Alert severity="error"><AlertTitle>Oops!</AlertTitle>{error}</Alert>}
                                {success && <Alert severity="success">{success}</Alert>}
                            </Grid>
                            <Grid item xs={12}>
                                <label>Title</label>
                                <input type="text" name="title" ref={titleRef} value={title} onChange={handleTitleChange} />
                            </Grid>
                            <Grid item xs={12}>
                                <label>Post</label>
                                <textarea rows="10" cols="40" type="text" name="Write your content here..." value={content} ref={contentRef} onChange={handleContentChange} />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Button disabled={loading} color="secondary" fullWidth type="submit" variant="contained">
                            Create
                </Button>
                    </Grid>
                </Grid>
            </form>
        </Container>
    );
};