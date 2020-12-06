import React, { useRef, useState } from 'react'
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
    }
}));

export default function Register(props) {
    const { signUp } = useAuth()
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()
    const classes = useStyles();
    const emailRef = useRef()
    const passwordRef = useRef()
    const confirmPasswordRef = useRef()

    async function handleSubmit(e) {
        e.preventDefault()

        if (passwordRef.current.value !== confirmPasswordRef.current.value) {
            return setError('Passwords do not match')
        }

        try {
            setError('')
            setSuccess('Successfully signed up!')
            setLoading(true)
            await signUp(emailRef.current.value, passwordRef.current.value)
            history.push('')
        } catch {
            setSuccess('')
            setError('Failed to create your account')
        }
        setLoading(false)
    }

    return (
        <Container className={classes.container} maxWidth="xs">
            <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                {error && <Alert severity="error"><AlertTitle>Oops!</AlertTitle>{error}</Alert>}
                                {success && <Alert severity="success">{success}</Alert>}
                            </Grid>
                            <Grid item xs={12}>
                                <label>Email</label>
                                <input type="text" name="email" ref={emailRef} />
                            </Grid>
                            <Grid item xs={12}>
                                <label>Password</label>
                                <input type="password" name="password" ref={passwordRef} />
                            </Grid>
                            <Grid item xs={12}>
                                <label>Confirm password</label>
                                <input type="password" name="confirm-password" ref={confirmPasswordRef} />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Button disabled={loading} color="secondary" fullWidth type="submit" variant="contained">
                            Sign Up
                </Button>
                    </Grid>
                </Grid>
            </form>
        </Container>
    );
};