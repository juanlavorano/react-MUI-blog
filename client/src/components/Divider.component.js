import React from 'react';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    divider: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
        marginLeft: 0,
        marginRight: 0
    },

}));

const DividerLine = () => {
    const classes = useStyles();

    return (
        <Divider className={classes.divider} variant="middle" />
    )
}

export default DividerLine;