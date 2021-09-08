import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import LocalBarIcon from '@material-ui/icons/LocalBar';
import Title from './Title';

function preventDefault(event) {
    event.preventDefault();
}

const useStyles = makeStyles({
    depositContext: {
        flex: 1,
    },
    colorText: {
        color: '#FFFFFF',
    }
});

export default function Deposits(props) {
    const classes = useStyles();
    return (
    <React.Fragment>
        <Title className={classes.colorText}>{props.title}</Title>
        <Typography component="p" variant="h4" className={classes.colorText}>
        <LocalBarIcon fontSize="medium" />
            {props.value}
        </Typography>
        <Typography color="textSecondary" className={classes.depositContext, classes.colorText}>
            {props.text}
        </Typography>
    </React.Fragment>
    
);
}