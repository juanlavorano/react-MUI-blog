import React from 'react'
import LatestPosts from './LatestPosts/LatestPosts.component'
import MorePosts from './MorePosts/MorePosts.component'
import DividerLine from '../Divider.component'
import MainImage from './MainImage/MainImage.component'
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    container: {
        minHeight: '100vh'
    }
}));

const MainPage = () => {
    const classes = useStyles();

    return (
        <div className='main-page'>
            <Container className={classes.container} mx='auto' p={4} width='80%' height='100%'>
                <MainImage />
                <DividerLine />
                <LatestPosts />
                <DividerLine />
                <MorePosts />
            </Container>
        </div>
    )
}

export default MainPage;