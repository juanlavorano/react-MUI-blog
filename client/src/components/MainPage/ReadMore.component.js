import React from 'react';
import Link from '@material-ui/core/Link'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    text: {
        fontStyle: 'italic'
    }
}));

export default function ReadMore() {
    const classes = useStyles();

    return (
        <Link color='inherit' style={{ cursor: 'pointer' }} className={classes.text}>
            ... Read More
        </Link>
    );
}